import { NextResponse } from 'next/server';
import { z } from 'zod';
import { classifyRisk } from '../../../lib/risk';

const PayloadSchema = z.object({
  totalRecords: z.number().int().nonnegative(),
  anomalyTraffic: z.number().int().nonnegative(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = PayloadSchema.parse(json);
    return NextResponse.json(classifyRisk(payload.totalRecords, payload.anomalyTraffic));
  } catch {
    return NextResponse.json(
      {
        error: 'Invalid payload. Gunakan totalRecords dan anomalyTraffic dalam format angka.',
      },
      { status: 400 },
    );
  }
}
