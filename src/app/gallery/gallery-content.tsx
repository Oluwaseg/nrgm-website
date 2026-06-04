'use client';
import {
  LightboxGallery,
  type GalleryImage,
} from '@/components/LightboxGallery';
import { img } from '@/constants';
import { useState } from 'react';

type Category =
  | 'All'
  | 'Worship'
  | 'Revivals'
  | 'Founder'
  | 'International'
  | 'Choir'
  | 'Outreach';

const photos: (GalleryImage & { category: Exclude<Category, 'All'> })[] = [
  {
    src: img.image_d,
    // title: 'Sunday Worship',
    // description: 'Hands raised in surrender during Sunday service.',
    category: 'Worship',
  },
  {
    src: img.image_a,
    // title: 'Anointed Choir',
    // description: "Choir leads the congregation into God's presence.",
    category: 'Choir',
  },
  {
    src: img.image_f,
    // title: 'Night of Revival',
    // description: 'Open-air crusade reaching the lost.',
    category: 'Revivals',
  },
  {
    src: img.image_e,
    // title: 'Altar of Healing',
    // description: 'Prophet ministers in the laying on of hands.',
    category: 'Revivals',
  },
  {
    src: img.image_g,
    // title: 'River Baptism',
    // description: 'New believers entering covenant by water.',
    category: 'Worship',
  },
  {
    src: img.image_h,
    // title: 'Evening Watch',
    // description: 'Stillness before God in the late candle hour.',
    category: 'Worship',
  },
  {
    src: img.image_j,
    // title: 'International Pulpit',
    // description: 'Ministering at a global conference.',
    category: 'International',
  },
  {
    src: img.founder1,
    // title: 'Founder Portrait',
    // description: 'Prophet Dr. M.O.A. Ajidara, Founder & GO.',
    category: 'Founder',
  },
  {
    src: img.founder2,
    // title: 'Founder in Ministry',
    // description: 'Prophet in service.',
    category: 'Founder',
  },
  {
    src: img.founded,
    // title: '2008 — The Beginning',
    // description: 'First gatherings of the ministry.',
    category: 'Founder',
  },
  {
    src: img.growth,
    // title: 'Inside the Auditorium',
    // description: 'The main hall during Sunday service.',
    category: 'Worship',
  },
  {
    src: img.image_k,
    // title: 'Youth Encounter',
    // description: 'A generation lifting up holy hands.',
    category: 'Worship',
  },
  {
    src: img.image_i,
    // title: "Women's Fellowship",
    // description: 'Daughters of Zion gathered in unity.',
    category: 'Outreach',
  },
  {
    src: img.image_l,
    // title: 'Men in Prayer',
    // description: "Men's ministry interceding together.",
    category: 'Worship',
  },
  {
    src: img.international,
    // title: 'Door-to-Door',
    // description: 'Evangelism team in the community.',
    category: 'Outreach',
  },
  {
    src: img.image_c,
    // title: 'The Word',
    // description: 'The lamp unto our feet.',
    category: 'Worship',
  },
  {
    src: img.image_b,
    // title: 'Worship Service',
    // description: 'Community in prayer.',
    category: 'Worship',
  },
  {
    src: img.founder3,
    // title: 'Founder Portrait',
    // description: 'Prophet Dr. M.O.A. Ajidara.',
    category: 'Founder',
  },
  {
    src: img.founder4,
    // title: 'Ministry Leader',
    // description: 'In spiritual service.',
    category: 'Founder',
  },
  {
    src: img.founder5,
    // title: 'Worship in Truth',
    // description: 'Open Bible ministry.',
    category: 'Worship',
  },
  {
    src: img.image_m,
    // title: 'Community Gathering',
    // description: 'Believers in fellowship.',
    category: 'Outreach',
  },
  {
    src: img.early,
    // title: 'Early Ministry Days',
    // description: 'Foundation years of growth.',
    category: 'Founder',
  },
  {
    src: img.founder6,
    // title: 'Leadership in Action',
    // description: 'Servant leadership.',
    category: 'Founder',
  },
];

const categories: Category[] = [
  'All',
  'Worship',
  'Revivals',
  'Founder',
  'International',
  'Choir',
  'Outreach',
];

export function GalleryContent() {
  const [active, setActive] = useState<Category>('All');
  const filtered =
    active === 'All' ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <section className='relative h-[55vh] min-h-[420px] flex items-end overflow-hidden'>
        <img
          src={img.candles.src}
          alt='Gallery'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Gallery</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            Years of glory, captured in{' '}
            <span className='italic text-gold'>light</span>.
          </h1>
          <p className='mt-4 text-parchment/70 max-w-xl text-sm'>
            Tap any photo for the full-screen viewer with captions, zoom, and
            swipe.
          </p>
        </div>
      </section>

      <section className='py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='flex flex-wrap gap-2 mb-10 sticky top-20 z-30 bg-background/90 backdrop-blur py-3 -mx-2 px-2 rounded'>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition border ${
                  active === c
                    ? 'bg-ink text-parchment border-ink'
                    : 'bg-background text-ink border-border hover:border-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <LightboxGallery images={filtered} variant='masonry' />
        </div>
      </section>
    </>
  );
}
