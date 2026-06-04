import { img } from '@/constants';
import type { Metadata } from 'next';
import { FaHeadphones } from 'react-icons/fa';
import { HiPlay } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Sermons — Cherubim & Seraphim NGRM',
  description:
    'Watch and listen to life-transforming sermons, teachings, and revival ministrations.',
  openGraph: {
    title: 'Sermons & Teachings',
    description: 'Messages to strengthen your faith.',
  },
};

const featured = {
  title: 'The Power of Divine Revelation',
  minister: 'Prophet Dr. M.O.A. Ajidara',
  date: 'May 18, 2026',
  scripture: 'Ephesians 1:17-23',
  summary:
    'A foundational teaching on receiving the spirit of wisdom and revelation in the knowledge of Him.',
  thumb: img.bible.src,
};

const sermons = [
  {
    title: 'Walking in Spiritual Authority',
    minister: 'Prophet Dr. M.O.A. Ajidara',
    date: 'May 11, 2026',
    scripture: 'Luke 10:19',
    thumb: img.prayer.src,
    type: 'video' as const,
  },
  {
    title: 'The Altar of Continuous Fire',
    minister: 'Pastor Tunde A.',
    date: 'May 4, 2026',
    scripture: 'Leviticus 6:13',
    thumb: img.candles.src,
    type: 'audio' as const,
  },
  {
    title: 'Raising the Next Generation',
    minister: 'Mrs. Grace O.',
    date: 'April 27, 2026',
    scripture: '2 Timothy 2:2',
    thumb: img.youth.src,
    type: 'video' as const,
  },
  {
    title: 'When God Visits His People',
    minister: 'Prophet Dr. M.O.A. Ajidara',
    date: 'April 20, 2026',
    scripture: 'Luke 1:68',
    thumb: img.crusade.src,
    type: 'video' as const,
  },
  {
    title: 'The Discipline of Prayer',
    minister: 'Evang. Joseph K.',
    date: 'April 13, 2026',
    scripture: 'Luke 18:1',
    thumb: img.bible.src,
    type: 'audio' as const,
  },
  {
    title: 'Worship as Warfare',
    minister: 'Min. Esther B.',
    date: 'April 6, 2026',
    scripture: '2 Chronicles 20:21',
    thumb: img.choir.src,
    type: 'video' as const,
  },
];

export default function Sermons() {
  return (
    <>
      <section className='relative h-[55vh] min-h-[420px] flex items-end overflow-hidden'>
        <img
          src={img.bible.src}
          alt='Sermons'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Sermons & Teachings</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            Words that <span className='italic text-gold'>transform</span>.
          </h1>
        </div>
      </section>

      {/* FEATURED */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center'>
          <div className='relative aspect-video rounded-sm overflow-hidden frame-gold group cursor-pointer'>
            <img
              src={featured.thumb}
              alt={featured.title}
              loading='lazy'
              fetchPriority='high'
              decoding='async'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-ink/40 flex items-center justify-center'>
              <div className='h-20 w-20 rounded-full bg-gold flex items-center justify-center text-ink group-hover:scale-110 transition'>
                <HiPlay size={32} className='ml-1' />
              </div>
            </div>
            <div className='absolute top-4 left-4 bg-ember text-parchment text-xs uppercase tracking-[0.25em] px-3 py-1.5'>
              Featured
            </div>
          </div>
          <div>
            <p className='gold-divider'>Latest Message</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
              {featured.title}
            </h2>
            <div className='mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground'>
              <span>{featured.minister}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span className='text-gold'>{featured.scripture}</span>
            </div>
            <p className='mt-6 text-muted-foreground leading-relaxed'>
              {featured.summary}
            </p>
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section className='py-24 bg-secondary'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Sermon Library</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            Browse <span className='italic text-gold'>recent</span> messages.
          </h2>

          <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {sermons.map((s) => (
              <article
                key={s.title}
                className='group bg-background border border-border rounded-sm overflow-hidden'
              >
                <div className='relative aspect-video overflow-hidden'>
                  <img
                    src={s.thumb}
                    alt={s.title}
                    loading='lazy'
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center'>
                    <div className='h-14 w-14 rounded-full bg-gold text-ink flex items-center justify-center'>
                      {s.type === 'video' ? (
                        <HiPlay size={22} className='ml-0.5' />
                      ) : (
                        <FaHeadphones size={18} />
                      )}
                    </div>
                  </div>
                  <div className='absolute top-3 left-3 bg-ink/90 text-gold text-[10px] uppercase tracking-widest px-2 py-1'>
                    {s.type}
                  </div>
                </div>
                <div className='p-6'>
                  <p className='text-[11px] uppercase tracking-[0.25em] text-gold'>
                    {s.scripture}
                  </p>
                  <h3 className='mt-2 font-display text-xl leading-tight'>
                    {s.title}
                  </h3>
                  <p className='mt-3 text-xs text-muted-foreground'>
                    {s.minister} · {s.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
