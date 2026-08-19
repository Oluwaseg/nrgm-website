'use client';
import { img } from '@/constants';
import { useState } from 'react';
import { HiArrowLeft, HiCalendar, HiClock } from 'react-icons/hi';
import Link from 'next/link';
import { FlyerModal } from '@/components/FlyerModal';

const schedule = [
  {
    label: 'First 7 Days — Revival',
    dates: 'Monday, July 27 – Monday, August 3, 2026',
    time: '5:00 PM – 7:00 PM',
  },
  {
    label: 'Monday, Wednesday & Friday',
    dates: 'Vigil',
    time: '11:00 PM – 3:00 AM',
  },
  {
    label: 'Tuesday & Thursday',
    dates: 'Revival',
    time: '5:00 PM – 7:00 PM',
  },
  {
    label: 'Descending Day',
    dates: 'Thursday, September 3, 2026',
    time: '10:00 AM – 4:00 PM',
    note: 'Prompt attendance.',
  },
];

export function ShilohContent() {
  const [flyerOpen, setFlyerOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className='relative min-h-[50vh] flex items-end overflow-hidden ink-section'>
        <div className='absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/80' />
        <div className='absolute top-0 right-0 w-1/2 h-full opacity-10'>
          <div className='absolute inset-0 bg-gradient-to-l from-gold to-transparent' />
        </div>
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-16 pt-36 w-full'>
          <Link
            href='/events'
            className='inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-soft hover:text-gold transition mb-8'
          >
            <HiArrowLeft /> Back to Events
          </Link>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-ember/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-parchment mb-4'>
            <span className='h-1.5 w-1.5 rounded-full bg-parchment animate-pulse' />
            Happening Now
          </span>
          <h1 className='font-display text-5xl lg:text-7xl text-parchment leading-tight'>
            Annual Shiloh <span className='italic text-gold'>2026</span>
          </h1>
          <p className='mt-3 text-lg font-semibold uppercase tracking-wider text-gold-soft'>
            40 Days Fasting & Prayer
          </p>
        </div>
      </section>

      {/* THEME */}
      <section className='py-20 lg:py-28'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='gold-divider mx-auto'>Theme</p>
            <blockquote className='mt-6'>
              <p className='font-display text-3xl lg:text-5xl italic leading-tight'>
                "Where Is Thy Mercy —{' '}
                <span className='text-gold'>Anu Re Da</span>?"
              </p>
              <cite className='mt-4 block text-lg text-muted-foreground not-italic'>
                Psalm 25:10
              </cite>
            </blockquote>
            <div className='mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
              <HiCalendar className='text-gold' />
              <span>Sunday, July 26 – Thursday, September 3, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className='py-20 bg-secondary'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Schedule</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
            Program <span className='italic text-gold'>outline</span>.
          </h2>

          <div className='mt-12 grid md:grid-cols-2 gap-6'>
            {schedule.map((s) => (
              <article
                key={s.label}
                className='relative bg-card border border-border rounded-sm p-8 group hover:border-gold/30 transition'
              >
                <div className='absolute top-0 right-0 h-20 w-20 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition' />
                <h3 className='font-display text-2xl'>{s.label}</h3>
                <div className='mt-4 space-y-1.5 text-sm text-muted-foreground'>
                  <p className='flex items-center gap-2'>
                    <HiCalendar className='text-gold' /> {s.dates}
                  </p>
                  <p className='flex items-center gap-2'>
                    <HiClock className='text-gold' /> {s.time}
                  </p>
                </div>
                {s.note && (
                  <p className='mt-3 text-xs font-semibold uppercase tracking-wider text-ember'>
                    {s.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLYER SECTION */}
      <section className='py-20 lg:py-28'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 text-center'>
          <p className='gold-divider mx-auto'>Official Flyer</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
            Event <span className='italic text-gold'>artwork</span>.
          </h2>
          <p className='mt-4 text-muted-foreground max-w-lg mx-auto'>
            View and share the official Annual Shiloh 2026 flyer with your
            family and community.
          </p>
          {img.shiloh2026Flyer ? (
            <button
              onClick={() => setFlyerOpen(true)}
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-parchment hover:bg-ink-soft transition'
            >
              View Official Flyer
            </button>
          ) : (
            <p className='mt-8 text-sm text-muted-foreground italic'>
              Flyer will be available soon.
            </p>
          )}
        </div>
      </section>

      {/* LOCATION */}
      <section className='py-20 ink-section'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 text-center'>
          <p className='gold-divider mx-auto text-gold-soft'>Location</p>
          <h2 className='mt-5 font-display text-4xl text-parchment'>
            Join us at the <span className='italic text-gold'>Headquarters</span>
          </h2>
          <p className='mt-4 text-parchment/70'>
            Cherubim & Seraphim New Generation Revelation Ministry
          </p>
          <p className='text-parchment/70'>Ijagba Ota, Ogun State · Off Obasanjo Farm</p>
          <Link
            href='/contact'
            className='mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
          >
            Get Directions
          </Link>
        </div>
      </section>

      <FlyerModal
        src={img.shiloh2026Flyer}
        alt='Annual Shiloh 2026 Official Flyer'
        open={flyerOpen}
        onClose={() => setFlyerOpen(false)}
      />
    </>
  );
}
