import type { Metadata } from 'next';
import { ShilohContent } from './shiloh-content';

export const metadata: Metadata = {
  title: 'Annual Shiloh 2026 — 40 Days Fasting & Prayer',
  description:
    'Annual Shiloh 2026: 40 Days Fasting & Prayer. Theme: "Where Is Thy Mercy — Anu Re Da?" (Psalm 25:10). July 26 – September 3, 2026.',
  openGraph: {
    title: 'Annual Shiloh 2026 — 40 Days Fasting & Prayer',
    description:
      'Theme: "Where Is Thy Mercy — Anu Re Da?" (Psalm 25:10). July 26 – September 3, 2026.',
  },
};

export default function ShilohPage() {
  return <ShilohContent />;
}
