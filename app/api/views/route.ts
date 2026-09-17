import { getStore } from '@netlify/blobs';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const SEED_COUNT = 511;

export async function GET() {
	try {
		const store = getStore('counters');
		const current = (await store.get('views', { type: 'json' })) as number | null;
		const count = (current ?? SEED_COUNT) + 1;
		await store.setJSON('views', count);
		return NextResponse.json({ count });
	} catch {
		// No Netlify Blobs context available (e.g. plain `next dev` instead of
		// `netlify dev`) — fall back without persisting so local dev never crashes.
		return NextResponse.json({ count: SEED_COUNT });
	}
}
