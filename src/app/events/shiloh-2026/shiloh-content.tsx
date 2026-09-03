'use client';

import { Countdown } from '@/components/Countdown';
import { DescendingDayModal } from '@/components/DescendingDayModal';
import { FlyerModal } from '@/components/FlyerModal';
import { img } from '@/constants';
import { shiloh, shilohMinisters, shilohSchedule } from '@/lib/shiloh-2026';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  HiArrowRight,
  HiBell,
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiPhone,
  HiPhotograph,
} from 'react-icons/hi';

export function Shiloh2026() {
  const [flyer, setFlyer] = useState(false);
  const [descendingOpen, setDescendingOpen] = useState(false);
  const now = Date.now();
  const live =
    now >= new Date(shiloh.startsAt).getTime() &&
    now <= new Date(shiloh.endsAt).getTime();

  const descendingDay = new Date(shiloh.descendingDay);
  const isDescendingDay =
    new Date().toDateString() === descendingDay.toDateString();

  useEffect(() => {
    if (isDescendingDay) {
      const timer = setTimeout(() => setDescendingOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isDescendingDay]);

  return (
    <>
      {/* HERO */}
      <section className='relative flex min-h-[75vh] items-end overflow-hidden'>
        <img
          src={img.auditorium.src}
          alt='Annual Shiloh revival gathering'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/70 to-transparent' />
        <div className='relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10'>
          <p className='inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold'>
            <span className='relative flex h-2 w-2'>
              {live && (
                <span className='absolute inset-0 animate-ping rounded-full bg-gold' />
              )}
              <span className='relative h-2 w-2 rounded-full bg-gold' />
            </span>
            {live ? 'Happening Now' : 'Featured Event'}
          </p>
          <h1 className='mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-parchment sm:text-6xl lg:text-7xl'>
            Annual Shiloh <span className='italic text-gold'>2026</span>
          </h1>
          <p className='mt-4 text-sm uppercase tracking-[0.3em] text-gold-soft'>
            {shiloh.program}
          </p>
          <p className='mt-5 flex items-center gap-2 text-parchment/85'>
            <HiCalendar className='text-gold' /> {shiloh.dateLabel}
          </p>
          <div className='mt-9 flex flex-wrap gap-3'>
            {isDescendingDay && (
              <button
                type='button'
                onClick={() => setDescendingOpen(true)}
                className='inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-gold-soft animate-pulse'
              >
                <HiBell /> Join Us Today — 10am
              </button>
            )}
            <button
              type='button'
              onClick={() => setFlyer(true)}
              className='inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-parchment transition hover:bg-ink-soft'
            >
              <HiPhotograph /> View Official Flyer
            </button>
            <a
              href={`tel:+234${shiloh.phones[0].slice(1)}`}
              className='inline-flex items-center gap-2 rounded-full border border-parchment/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-parchment transition hover:bg-parchment hover:text-ink'
            >
              <HiPhone /> Call the Church
            </a>
          </div>
        </div>
      </section>

      {/* THEME */}
      <section className='py-20 lg:py-28'>
        <div className='mx-auto max-w-4xl px-5 text-center lg:px-10'>
          <p className='gold-divider mx-auto'>Theme of the Year</p>
          <h2 className='mt-6 font-display text-4xl italic leading-tight text-balance lg:text-6xl'>
            "Where Is Thy <span className='text-gold'>Mercy</span> — Anu Re Da?"
          </h2>
          <p className='mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground'>
            {shiloh.scripture}
          </p>
          <p className='mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground'>
            Forty days set apart for fasting, prayer, revival and prophetic
            impartation — a season of crying out for mercy and receiving fresh
            grace for the days ahead.
          </p>
        </div>
      </section>

      {/* STATUS / COUNTDOWN */}
      <section className='ink-section py-16'>
        <div className='mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-10'>
          <div>
            <p className='gold-divider text-gold-soft'>
              {live ? 'Current Status' : 'Getting Ready'}
            </p>
            <h2 className='mt-5 font-display text-3xl leading-tight text-parchment lg:text-4xl'>
              {live ? (
                <>
                  Shiloh is{' '}
                  <span className='italic text-gold'>in progress</span> — join
                  any service.
                </>
              ) : (
                <>
                  Shiloh <span className='italic text-gold'>begins soon</span>.
                </>
              )}
            </h2>
            <p className='mt-4 max-w-lg leading-relaxed text-parchment/80'>
              {live
                ? 'The 40 days run through Thursday, September 3, 2026, closing with Descending Day. Vigils hold Monday, Wednesday and Friday; revival services hold Tuesday and Thursday.'
                : 'Mark your calendar — the programme opens Sunday, July 26, 2026.'}
            </p>
          </div>
          <div className='rounded-sm border border-parchment/15 bg-parchment/5 p-6'>
            <p className='text-[11px] uppercase tracking-[0.3em] text-gold'>
              {live ? 'Countdown to Descending Day' : 'Countdown to Shiloh'}
            </p>
            <div className='mt-4'>
              <Countdown
                target={live ? shiloh.descendingDay : shiloh.startsAt}
                tone='light'
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className='py-20 lg:py-28'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Programme Schedule</p>
          <h2 className='mt-5 font-display text-4xl leading-tight lg:text-5xl'>
            Forty days, one <span className='italic text-gold'>altar</span>.
          </h2>
          <div className='mt-12 grid gap-px bg-border md:grid-cols-2'>
            {shilohSchedule.map((s) => (
              <article
                key={s.tag}
                className='group bg-background p-8 transition-colors duration-500 hover:bg-ink hover:text-parchment lg:p-10'
              >
                <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                  {s.tag}
                </p>
                <h3 className='mt-4 font-display text-3xl'>{s.title}</h3>
                <div className='mt-5 space-y-1.5 text-sm'>
                  <p className='flex items-center gap-2'>
                    <HiCalendar className='text-gold' /> {s.when}
                  </p>
                  <p className='flex items-center gap-2'>
                    <HiClock className='text-gold' /> {s.time}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTERS */}
      <section className='bg-secondary py-20 lg:py-28'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Guest Ministers & Artists</p>
          <h2 className='mt-5 font-display text-4xl leading-tight lg:text-5xl'>
            Voices for the <span className='italic text-gold'>season</span>.
          </h2>
          <ul className='mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3'>
            {shilohMinisters.map((m) => (
              <li key={m.name} className='bg-card p-7'>
                <p className='font-display text-xl leading-snug'>{m.name}</p>
                <p className='mt-2 text-[11px] uppercase tracking-[0.2em] text-gold'>
                  {m.role}
                </p>
              </li>
            ))}
          </ul>
          <p className='mt-6 text-xs italic text-muted-foreground'>
            Names and roles as printed on the official Annual Shiloh 2026 flyer.
          </p>
        </div>
      </section>

      {/* VENUE */}
      <section className='py-20 lg:py-28'>
        <div className='mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:px-10'>
          <div>
            <p className='gold-divider'>Venue & Enquiries</p>
            <h2 className='mt-5 font-display text-4xl leading-tight lg:text-5xl'>
              Come as you are, leave{' '}
              <span className='italic text-gold'>renewed</span>.
            </h2>
            <p className='mt-6 flex items-start gap-2 leading-relaxed text-muted-foreground'>
              <HiLocationMarker className='mt-1 shrink-0 text-gold' />{' '}
              {shiloh.address}
            </p>
            <div className='mt-4 flex flex-wrap gap-3'>
              {shiloh.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+234${p.slice(1)}`}
                  className='inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition hover:bg-ink hover:text-parchment'
                >
                  <HiPhone className='text-gold' /> {p}
                </a>
              ))}
            </div>
            <Link
              href='/contact'
              className='mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-semibold uppercase tracking-widest text-ink transition-all hover:gap-3'
            >
              Get Directions <HiArrowRight />
            </Link>
          </div>

          <div>
            <button
              type='button'
              onClick={() => setFlyer(true)}
              aria-label='Open the Annual Shiloh 2026 official flyer'
              className='block w-full overflow-hidden rounded-sm frame-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
            >
              <img
                src={shiloh.flyer}
                alt='Annual Shiloh 2026 official flyer with theme, dates and guest ministers'
                loading='lazy'
                decoding='async'
                className='w-full transition duration-700 hover:scale-[1.02]'
              />
            </button>
            <p className='mt-3 text-center text-xs text-muted-foreground italic'>
              Tap the flyer to open it full screen and zoom in.
            </p>
          </div>
        </div>
      </section>

      <FlyerModal
        open={flyer}
        onClose={() => setFlyer(false)}
        src={shiloh.flyer}
        alt='Annual Shiloh 2026 official flyer'
        caption='Annual Shiloh 2026 — Official Flyer'
      />
      <DescendingDayModal
        open={descendingOpen}
        onClose={() => setDescendingOpen(false)}
      />
    </>
  );
}

export const ShilohContent = Shiloh2026;
