"""Small SQLite storage for dashboard audit and operational health."""

import sqlite3
from datetime import datetime, timezone
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATABASE_PATH = PROJECT_ROOT / "data" / "netguard.db"


def get_connection():
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def init_db():
    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS audit_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_type TEXT NOT NULL,
                title TEXT NOT NULL,
                detail TEXT,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS system_health (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                status TEXT NOT NULL,
                best_model TEXT,
                risk_level TEXT,
                risk_score REAL DEFAULT 0,
                updated_at TEXT NOT NULL
            )
            """
        )


def utc_now():
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def log_event(event_type, title, detail=""):
    init_db()
    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO audit_events (event_type, title, detail, created_at)
            VALUES (?, ?, ?, ?)
            """,
            (event_type, title, detail, utc_now()),
        )


def list_events(limit=8):
    init_db()
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT event_type, title, detail, created_at
            FROM audit_events
            ORDER BY id DESC
            LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return [dict(row) for row in rows]


def update_health(status, best_model, risk_level, risk_score):
    init_db()
    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO system_health (id, status, best_model, risk_level, risk_score, updated_at)
            VALUES (1, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                status = excluded.status,
                best_model = excluded.best_model,
                risk_level = excluded.risk_level,
                risk_score = excluded.risk_score,
                updated_at = excluded.updated_at
            """,
            (status, best_model, risk_level, float(risk_score or 0), utc_now()),
        )


def get_health():
    init_db()
    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT status, best_model, risk_level, risk_score, updated_at
            FROM system_health
            WHERE id = 1
            """
        ).fetchone()
    return dict(row) if row else {}
