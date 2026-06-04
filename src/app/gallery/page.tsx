import type { Metadata } from 'next';
import { GalleryContent } from './gallery-content';

export const metadata: Metadata = {
  title: 'Gallery — Cherubim & Seraphim NGRM',
  description:
    'Worship, revivals, outreach, conferences and ministry journeys captured through the years.',
  openGraph: {
    title: 'Gallery',
    description: 'Moments of worship, revival and outreach.',
  },
};

export default function Gallery() {
  return <GalleryContent />;
}
