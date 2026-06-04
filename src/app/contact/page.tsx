import type { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact — Cherubim & Seraphim NGRM',
  description:
    'Visit us in Ota or Lagos. Send a prayer request or get in touch via WhatsApp.',
  openGraph: {
    title: 'Contact Us',
    description: 'Plan a visit or send a prayer request.',
  },
};

export default function Contact() {
  return <ContactContent />;
}
