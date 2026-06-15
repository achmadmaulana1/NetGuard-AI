import { NextResponse } from 'next/server';
import { classifyRisk } from '../../../lib/risk';

export async function GET() {
  const risk = classifyRisk(12, 6);
  return NextResponse.json({
    ...risk,
    bestModel: 'Logistic Regression',
    accuracy: 1,
    precision: 1,
    recall: 1,
    f1Score: 1,
    message: 'Demo summary. Connect this endpoint to Flask model outputs or PostgreSQL records for production.',
  });
}
