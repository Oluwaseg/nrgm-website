import type { Metadata } from 'next';
import { EventsContent } from './events-content';

export const metadata: Metadata = {
  title: 'Events — Cherubim & Seraphim NGRM',
  description:
    'Upcoming revivals, weekly services, conferences, and past programs.',
  openGraph: {
    title: 'Events & Programs',
    description: 'Revivals, services, and special gatherings.',
  },
};

export default function Events() {
  return <EventsContent />;
}
