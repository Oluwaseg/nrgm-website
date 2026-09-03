import { shiloh } from '@/lib/shiloh-2026';
import { useEffect, useRef, useState } from 'react';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiPhone,
  HiSparkles,
  HiX,
} from 'react-icons/hi';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function DescendingDayModal({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!open) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 900);
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open) return null;

  const dateObj = new Date(shiloh.descendingDay);
  const isToday = new Date().toDateString() === dateObj.toDateString();
  const eventStarted = Date.now() >= dateObj.getTime();

  const facebookUrl = 'https://web.facebook.com/profile.php?id=100014843042245';

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='descending-title'
      aria-describedby='descending-desc'
      onClick={onClose}
      className='fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-lg overflow-hidden rounded-sm border border-gold/40 bg-background shadow-2xl'
      >
        {/* Decorative top bar */}
        <div className='absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold via-gold-soft to-gold' />

        {/* Background radiance */}
        <div className='pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ember/5 blur-3xl' />

        <div className='relative p-7 sm:p-10'>
          {/* Header badge */}
          <div className='flex items-center justify-center'>
            <span className='inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold'>
              <HiSparkles className='text-sm' />
              {isToday ? 'Today is the Day' : 'Descending Day'}
            </span>
          </div>

          {/* Title */}
          <h2
            id='descending-title'
            className={`mt-6 text-center font-display text-3xl leading-tight text-ink sm:text-4xl ${pulse ? 'animate-pulse' : ''}`}
          >
            Join us for the{' '}
            <span className='italic text-gold'>Grand Finale</span>
          </h2>

          <p
            id='descending-desc'
            className='mt-4 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground'
          >
            Annual Shiloh 2026 · Descending Day
          </p>

          {/* Date & time panel */}
          <div className='mt-8 rounded-sm border border-gold/20 bg-parchment/40 p-5'>
            <div className='flex items-center gap-3 border-b border-gold/10 pb-3'>
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold'>
                <HiCalendar />
              </span>
              <div>
                <p className='text-[11px] uppercase tracking-widest text-muted-foreground'>
                  Date
                </p>
                <p className='font-display text-lg text-ink'>
                  Thursday, September 3, 2026
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 pt-3'>
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold'>
                <HiClock />
              </span>
              <div>
                <p className='text-[11px] uppercase tracking-widest text-muted-foreground'>
                  Time
                </p>
                <p className='font-display text-lg text-ink'>
                  {eventStarted
                    ? 'Service in progress — 10:00 AM'
                    : '10:00 AM prompt'}
                </p>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className='mt-5 flex items-start gap-3'>
            <HiLocationMarker className='mt-1 shrink-0 text-gold' />
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {shiloh.address}
            </p>
          </div>

          {/* CTA buttons */}
          <div className='mt-8 grid gap-3 sm:grid-cols-2'>
            <a
              href={`tel:+234${shiloh.phones[0].slice(1)}`}
              className='inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-gold-soft'
            >
              <HiPhone /> Call Now
            </a>
            <a
              href={facebookUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-parchment'
            >
              <HiCalendar /> Watch Live
            </a>
          </div>

          <p className='mt-5 text-center text-xs italic text-muted-foreground'>
            Celebration of our prophetic yearly 40 days fasting and prayers.
          </p>
        </div>

        {/* Close button */}
        <button
          ref={closeRef}
          type='button'
          aria-label='Close announcement'
          onClick={onClose}
          className='absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold'
        >
          <HiX />
        </button>
      </div>
    </div>
  );
}
