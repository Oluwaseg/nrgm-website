import { img } from '@/constants';
import type { Metadata } from 'next';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Give — Cherubim & Seraphim NGRM',
  description:
    'Support the ministry through tithes, offerings, partnership, building project, and mission support.',
  openGraph: {
    title: 'Give & Partner',
    description: 'Sow into the work of the ministry.',
  },
};

const causes = [
  {
    title: 'Tithes & Offerings',
    desc: 'Honor God with the first-fruits of your increase.',
  },
  {
    title: 'Partnership',
    desc: 'Stand with the ministry on a monthly or annual basis.',
  },
  {
    title: 'Building Project',
    desc: 'Help us expand our worship and ministry facilities.',
  },
  {
    title: 'Mission Support',
    desc: 'Underwrite outreaches, crusades and international assignments.',
  },
];

export default function Donate() {
  return (
    <>
      <section className='relative h-[50vh] min-h-[400px] flex items-end overflow-hidden'>
        <img
          src={img.candles.src}
          alt='Give'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Support the Ministry</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            Sow into the <span className='italic text-gold'>kingdom</span>.
          </h1>
        </div>
      </section>

      <section className='py-24'>
        <div className='mx-auto max-w-4xl px-5 lg:px-10 text-center'>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            "Every man according as he purposeth in his heart, so let him give;
            not grudgingly, or of necessity: for God loveth a cheerful giver."{' '}
            <span className='italic text-gold'>— 2 Corinthians 9:7</span>
          </p>
        </div>
      </section>

      <section className='py-12'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border'>
          {causes.map((c) => (
            <div
              key={c.title}
              className='bg-background p-8 hover:bg-ink hover:text-parchment transition-colors duration-500 group'
            >
              <HiOutlineCash className='text-gold text-3xl' />
              <h3 className='mt-5 font-display text-xl'>{c.title}</h3>
              <p className='mt-3 text-sm text-muted-foreground group-hover:text-parchment/70'>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='ink-section py-24 mt-12'>
        <div className='mx-auto max-w-3xl px-5 lg:px-10'>
          <p className='gold-divider text-gold-soft mx-auto'>Bank Details</p>
          <h2 className='mt-5 font-display text-4xl text-parchment text-center'>
            Transfer instructions
          </h2>

          <div className='mt-10 p-10 border border-gold/30 rounded-sm bg-ink-soft/30'>
            <dl className='grid sm:grid-cols-2 gap-y-6 gap-x-10'>
              <div>
                <dt className='text-xs uppercase tracking-[0.25em] text-gold-soft'>
                  Bank Name
                </dt>
                <dd className='mt-1 font-display text-xl text-parchment'>
                  First Bank of Nigeria
                </dd>
              </div>
              <div>
                <dt className='text-xs uppercase tracking-[0.25em] text-gold-soft'>
                  Account Name
                </dt>
                <dd className='mt-1 font-display text-xl text-parchment'>
                  C&S New Generation Revelation Ministry
                </dd>
              </div>
              <div>
                <dt className='text-xs uppercase tracking-[0.25em] text-gold-soft'>
                  Account Number
                </dt>
                <dd className='mt-1 font-display text-xl text-parchment tracking-wider'>
                  0123456789
                </dd>
              </div>
              <div>
                <dt className='text-xs uppercase tracking-[0.25em] text-gold-soft'>
                  Currency
                </dt>
                <dd className='mt-1 font-display text-xl text-parchment'>
                  NGN
                </dd>
              </div>
            </dl>
            <p className='mt-8 text-sm text-parchment/60 italic'>
              For partnership, mission support, or building project, kindly
              include your purpose as the transfer reference, then notify us via
              WhatsApp.
            </p>
            <a
              href='https://wa.me/2349151043803'
              className='mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
            >
              <FaWhatsapp /> Notify via WhatsApp
            </a>
          </div>

          <p className='mt-8 text-center text-xs text-parchment/50 italic'>
            Online payment options coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
