import type { Metadata } from 'next';
import { ShilohContent } from './shiloh-content';

export const metadata: Metadata = {
  title: 'Annual Shiloh 2026 — 40 Days Fasting & Prayer | C&S NGRM',
  description:
    'Annual Shiloh 2026: 40 days of fasting and prayer, July 26 – September 3, 2026. Theme: "Where Is Thy Mercy — Anu Re Da?" (Psalm 25:10). Revivals, vigils and Descending Day in Ota, Ogun State.',
  openGraph: {
    title: 'Annual Shiloh 2026 — 40 Days Fasting & Prayer',
    description:
      'July 26 – September 3, 2026 · Theme: "Where Is Thy Mercy — Anu Re Da?" (Psalm 25:10)',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ShilohPage() {
  return <ShilohContent />;
}
