'use client';
import { img } from '@/constants';
import { useEffect, useState } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import { FlyerModal } from './FlyerModal';

const DESCENDING_DAY = new Date('2026-09-03T10:00:00+01:00').getTime();
const EVENT_END = new Date('2026-09-03T16:00:00+01:00').getTime();

function CountdownToDescending() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now === null) return null;
  const diff = Math.max(0, DESCENDING_DAY - now);
  if (diff === 0) return null;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return (
    <div className='mt-6'>
      <p className='text-xs uppercase tracking-[0.2em] text-gold-soft mb-2'>
        Descending Day Countdown
      </p>
      <div className='grid grid-cols-4 gap-2 text-center max-w-xs'>
        {[
          ['Days', d],
          ['Hrs', h],
          ['Min', m],
          ['Sec', s],
        ].map(([l, v]) => (
          <div key={l as string} className='bg-ink text-parchment py-2.5 rounded-sm'>
            <div className='font-display text-xl text-gold'>
              {String(v).padStart(2, '0')}
            </div>
            <div className='text-[9px] uppercase tracking-widest text-parchment/60'>
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedEvent() {
  const [flyerOpen, setFlyerOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (Date.now() > EVENT_END) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <>
      <section className='relative py-20 lg:py-28 ink-section overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-5'>
          <div className='absolute inset-0 bg-gradient-to-br from-gold via-transparent to-transparent' />
        </div>

        <div className='relative mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-ember/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-parchment animate-pulse'>
              <span className='h-1.5 w-1.5 rounded-full bg-parchment' />
              Happening Now
            </span>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-xs uppercase tracking-[0.3em] text-gold-soft flex items-center gap-2'>
                <HiCalendar className='text-gold' />
                Sunday, July 26 – Thursday, September 3, 2026
              </p>
              <h2 className='mt-4 font-display text-4xl lg:text-5xl text-parchment leading-tight'>
                Annual Shiloh{' '}
                <span className='italic text-gold'>2026</span>
              </h2>
              <p className='mt-2 text-lg font-semibold uppercase tracking-wider text-gold-soft'>
                40 Days Fasting & Prayer
              </p>
              <blockquote className='mt-5 border-l-2 border-gold/50 pl-4'>
                <p className='font-display text-xl italic text-parchment/90'>
                  "Where Is Thy Mercy — Anu Re Da?"
                </p>
                <cite className='mt-1 block text-sm text-gold-soft not-italic'>
                  Psalm 25:10
                </cite>
              </blockquote>

              <CountdownToDescending />

              <div className='mt-8 flex flex-wrap gap-3'>
                <Link
                  href='/events/shiloh-2026'
                  className='inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
                >
                  View Event <HiArrowRight />
                </Link>
                {img.shiloh2026Flyer && (
                  <button
                    onClick={() => setFlyerOpen(true)}
                    className='inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-parchment hover:bg-parchment/10 transition'
                  >
                    View Flyer
                  </button>
                )}
              </div>
            </div>

            <div className='hidden lg:flex items-center justify-center'>
              <div className='relative w-full max-w-sm'>
                <div className='absolute -inset-4 bg-gold/10 blur-3xl rounded-full' />
                <div className='relative bg-ink/50 border border-gold/20 rounded-sm p-8 text-center'>
                  <p className='text-xs uppercase tracking-[0.3em] text-gold-soft'>
                    Current Schedule
                  </p>
                  <div className='mt-5 space-y-4 text-left text-sm text-parchment/80'>
                    <div>
                      <p className='text-gold text-xs uppercase tracking-wider'>Mon, Wed & Fri</p>
                      <p>Vigil · 11:00 PM – 3:00 AM</p>
                    </div>
                    <div>
                      <p className='text-gold text-xs uppercase tracking-wider'>Tue & Thu</p>
                      <p>Revival · 5:00 PM – 7:00 PM</p>
                    </div>
                    <div className='pt-3 border-t border-parchment/10'>
                      <p className='text-gold text-xs uppercase tracking-wider'>Descending Day</p>
                      <p>Thu, Sept 3 · 10:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
