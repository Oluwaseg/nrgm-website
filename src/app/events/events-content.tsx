'use client';
import { LightboxGallery } from '@/components/LightboxGallery';
import { img } from '@/constants';
import { useEffect, useState } from 'react';
import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi';

const upcoming = [
  {
    date: '2026-07-15T18:00:00',
    title: 'Night of Divine Revelation',
    location: 'Ota Headquarters',
    flyer: img.crusade,
    desc: 'A 3-day prophetic revival with the General Overseer.',
  },
  {
    date: '2026-08-02T09:00:00',
    title: 'Youth Encounter Conference',
    location: 'Lagos Branch',
    flyer: img.youth,
    desc: 'A gathering for young believers — worship, teaching, fellowship.',
  },
  {
    date: '2026-09-12T07:00:00',
    title: 'Women in White Convention',
    location: 'Ota Headquarters',
    flyer: img.women,
    desc: "An annual convention for the women's ministry.",
  },
];

const weekly = [
  { day: 'Sunday', time: '8:00 AM – 8:45 AM', title: 'Sunday School' },
  { day: 'Sunday', time: '9:00 AM – 12:00 NOON', title: 'Sunday Worship' },
  { day: 'Tuesday', time: '9:00 AM – 12:00 NOON', title: 'Shilo Service' },
  {
    day: 'Tue & Thu',
    time: '8:00 AM – 4:00 PM',
    title: 'Counselling Sessions',
  },
];

const special = [
  {
    tag: 'Monthly Programme',
    title: 'From Wilderness to Glory',
    when: 'Last Friday of Every Month',
    time: '11:00 PM – 3:00 AM',
    desc: 'A monthly all-night encounter — deliverance, breakthrough, and divine repositioning.',
  },
  {
    tag: 'Annual Convention',
    title: 'Prophetic Convention',
    when: 'Late July – Early September',
    time: '40 Days Fasting, Prayers & Vigil',
    desc: 'Our flagship annual gathering — 40 days of consecration, prophecy, and impartation.',
  },
];

const past = [
  {
    src: img.crusade.src,
    title: 'Easter Revival 2025',
    description: 'Three nights of fire and impartation.',
  },
  {
    src: img.baptism.src,
    title: 'River Baptism 2024',
    description: 'New believers entered the covenant by water.',
  },
  {
    src: img.choir.src,
    title: 'Anniversary Service 2024',
    description: 'Celebrating 16 years of grace and ministry.',
  },
  {
    src: img.global.src,
    title: 'International Crusade — Ghana',
    description: 'Cross-border ministry to West Africa.',
  },
];

function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return (
    <div className='grid grid-cols-4 gap-2 text-center'>
      {[
        ['Days', d],
        ['Hrs', h],
        ['Min', m],
        ['Sec', s],
      ].map(([l, v]) => (
        <div
          key={l as string}
          className='bg-ink text-parchment py-3 rounded-sm'
        >
          <div className='font-display text-2xl text-gold'>
            {String(v).padStart(2, '0')}
          </div>
          <div className='text-[10px] uppercase tracking-widest text-parchment/60'>
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}

export function EventsContent() {
  const [popup, setPopup] = useState<(typeof upcoming)[number] | null>(null);

  return (
    <>
      <section className='relative h-[55vh] min-h-[420px] flex items-end overflow-hidden'>
        <img
          src={img.crusade.src}
          alt='Events'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Events & Programs</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            Gather with us in{' '}
            <span className='italic text-gold'>His presence</span>.
          </h1>
        </div>
      </section>

      {/* UPCOMING */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Upcoming Events</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            What's <span className='italic text-gold'>next</span>.
          </h2>

          <div className='mt-12 grid lg:grid-cols-3 gap-8'>
            {upcoming.map((e) => (
              <article
                key={e.title}
                className='group bg-card border border-border rounded-sm overflow-hidden flex flex-col'
              >
                <button
                  onClick={() => setPopup(e)}
                  className='aspect-[4/5] overflow-hidden block'
                >
                  <img
                    src={e.flyer.src}
                    alt={e.title}
                    loading='lazy'
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
                  />
                </button>
                <div className='p-6 flex flex-col flex-1'>
                  <h3 className='font-display text-2xl'>{e.title}</h3>
                  <div className='mt-3 space-y-1.5 text-sm text-muted-foreground'>
                    <p className='flex items-center gap-2'>
                      <HiCalendar className='text-gold' />{' '}
                      {new Date(e.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <p className='flex items-center gap-2'>
                      <HiClock className='text-gold' />{' '}
                      {new Date(e.date).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </p>
                    <p className='flex items-center gap-2'>
                      <HiLocationMarker className='text-gold' /> {e.location}
                    </p>
                  </div>
                  <div className='mt-5'>
                    <Countdown target={e.date} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY */}
      <section className='ink-section py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider text-gold-soft'>Weekly Services</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl text-parchment'>
            Every week, every <span className='italic text-gold'>altar</span>.
          </h2>
          <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment/10'>
            {weekly.map((w) => (
              <div key={w.title} className='bg-ink p-10'>
                <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                  {w.day}
                </p>
                <h3 className='mt-3 font-display text-2xl text-parchment'>
                  {w.title}
                </h3>
                <p className='mt-4 text-parchment/70 text-sm'>{w.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL PROGRAMMES */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Special Programmes</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            Seasons of <span className='italic text-gold'>encounter</span>.
          </h2>
          <div className='mt-12 grid md:grid-cols-2 gap-8'>
            {special.map((s) => (
              <article
                key={s.title}
                className='relative overflow-hidden border border-border bg-card p-10 rounded-sm group'
              >
                <div className='absolute top-0 right-0 h-32 w-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition' />
                <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                  {s.tag}
                </p>
                <h3 className='mt-4 font-display text-3xl lg:text-4xl'>
                  {s.title}
                </h3>
                <div className='mt-5 space-y-1.5 text-sm'>
                  <p className='flex items-center gap-2'>
                    <HiCalendar className='text-gold' /> {s.when}
                  </p>
                  <p className='flex items-center gap-2'>
                    <HiClock className='text-gold' /> {s.time}
                  </p>
                </div>
                <p className='mt-5 text-muted-foreground leading-relaxed'>
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PAST */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Past Programs</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            Moments we've <span className='italic text-gold'>treasured</span>.
          </h2>
          <div className='mt-12'>
            <LightboxGallery images={past} variant='grid' />
          </div>
        </div>
      </section>

      {/* FLYER POPUP */}
      {popup && (
        <div
          role='dialog'
          onClick={() => setPopup(null)}
          className='fixed inset-0 z-[60] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative max-w-4xl w-full bg-background rounded-sm overflow-hidden grid md:grid-cols-2 max-h-[90vh] overflow-y-auto'
          >
            <img
              src={popup.flyer.src}
              alt={popup.title}
              className='w-full h-full object-cover max-h-[60vh] md:max-h-none'
            />
            <div className='p-8'>
              <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                Event Preview
              </p>
              <h3 className='mt-3 font-display text-3xl'>{popup.title}</h3>
              <p className='mt-4 text-muted-foreground'>{popup.desc}</p>
              <div className='mt-5 space-y-1.5 text-sm'>
                <p className='flex items-center gap-2'>
                  <HiCalendar className='text-gold' />{' '}
                  {new Date(popup.date).toLocaleString()}
                </p>
                <p className='flex items-center gap-2'>
                  <HiLocationMarker className='text-gold' /> {popup.location}
                </p>
              </div>
              <button
                onClick={() => setPopup(null)}
                className='mt-8 w-full rounded-full bg-ink text-parchment py-3 text-xs uppercase tracking-widest hover:bg-ink-soft transition'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
