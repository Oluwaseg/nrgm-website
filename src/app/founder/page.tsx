import { LightboxGallery } from '@/components/LightboxGallery';
import { img } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder — Prophet Dr. M.O.A. Ajidara',
  description:
    'The life, calling and ministry of Prophet Dr. M.O.A. Ajidara, Founder & General Overseer.',
  openGraph: {
    title: 'Prophet Dr. M.O.A. Ajidara',
    description: 'Founder & General Overseer of Cherubim & Seraphim NGRM.',
  },
};

const earlyMinistry = [
  {
    src: img.founding.src,
    title: '2008 — Ministry Founded',
    description: 'The first gatherings in a modest hall in Ogun State.',
  },
  {
    src: img.candles.src,
    title: 'Hours of Prayer',
    description: "Late-night vigils that shaped the ministry's foundation.",
  },
];

const impactImages = [
  {
    src: img.crusade.src,
    title: 'Open-air Crusade',
    description: 'The gospel preached to thousands under the night sky.',
  },
  {
    src: img.prayer.src,
    title: 'Altar of Healing',
    description: 'Hands laid for impartation and restoration.',
  },
  {
    src: img.choir.src,
    title: 'Sunday Glory',
    description: "Worship that fills the auditorium with God's presence.",
  },
];

const globalImages = [
  {
    src: img.global.src,
    title: 'International Conference',
    description: 'Ministering at a global gathering of leaders.',
  },
  {
    src: img.evangelism.src,
    title: 'Outreach Team',
    description: 'Carrying the gospel to communities abroad.',
  },
];

const timeline = [
  { year: '2008', title: 'Ministry Founded', image: img.founding },
  { year: '2011', title: 'First Revival Programs', image: img.candles },
  { year: '2015', title: 'Church Expansion', image: img.auditorium },
  { year: '2019', title: 'International Missions', image: img.global },
  { year: '2026', title: 'Present-Day Ministry', image: img.choir },
];

export default function Founder() {
  return (
    <>
      {/* HERO */}
      <section className='relative min-h-[100vh] flex items-end overflow-hidden ink-section'>
        <img
          src={img.founder.src}
          alt='Prophet Dr. M.O.A. Ajidara'
          className='absolute inset-0 h-full w-full object-cover object-top opacity-70'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-20 pt-40 w-full'>
          <p className='gold-divider text-gold-soft'>
            Founder & General Overseer
          </p>
          <h1 className='mt-6 font-display text-5xl sm:text-7xl lg:text-8xl text-parchment leading-[1]'>
            Prophet Dr. M.O.A.
            <br />
            <span className='italic text-gold'>Ajidara</span>
          </h1>
          <p className='mt-6 max-w-2xl text-parchment/80 text-lg leading-relaxed'>
            A vessel of revelation, a teacher of the Word, and a father to a
            generation of believers and leaders called to represent the Cherubim
            & Seraphim movement across the world.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-4xl px-5 lg:px-10'>
          <p className='text-xl leading-relaxed'>
            Prophet Dr. M.O.A. Ajidara is the Founder and General Overseer of
            Cherubim and Seraphim New Generation Revelation Ministry.
          </p>
          <p className='mt-6 text-muted-foreground leading-relaxed'>
            Founded in 2008, the ministry was born through a strong divine
            revelation to raise a generation of transformational evangelical
            leaders who would represent the Cherubim and Seraphim movement in a
            spiritually sound and impactful way across the world.
          </p>
        </div>
      </section>

      {/* THE CALLING */}
      <section className='bg-secondary py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center'>
          <div className='lg:col-span-7'>
            <p className='gold-divider'>The Calling</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
              A divine call to bring God's people into a{' '}
              <span className='italic text-gold'>life-changing dimension</span>.
            </h2>
            <p className='mt-6 text-muted-foreground leading-relaxed'>
              After worshipping in both Anglican and Celestial churches, Prophet
              Dr. M.O.A. Ajidara received God's calling into the Cherubim and
              Seraphim ministry with a burden to help people encounter God in a
              life-changing dimension that brings restoration, spiritual growth,
              hope, and transformation.
            </p>
          </div>
          <div className='lg:col-span-5'>
            <LightboxGallery images={earlyMinistry} variant='grid' />
          </div>
        </div>
      </section>

      {/* MINISTRY IMPACT */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='max-w-2xl'>
            <p className='gold-divider'>Ministry Impact</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
              Raising apostles, evangelists, and{' '}
              <span className='italic text-gold'>spiritual leaders</span>.
            </h2>
            <p className='mt-6 text-muted-foreground leading-relaxed'>
              Over the years, the ministry has raised leaders who continue to
              impact lives, lead churches, and support communities in different
              dimensions.
            </p>
          </div>
          <div className='mt-12'>
            <LightboxGallery images={impactImages} variant='grid' />
          </div>
        </div>
      </section>

      {/* GLOBAL OUTREACH */}
      <section className='ink-section py-24 lg:py-32 relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='max-w-2xl'>
            <p className='gold-divider text-gold-soft'>Global Outreach</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl text-parchment leading-tight'>
              The Word carried to{' '}
              <span className='italic text-gold'>the nations</span>.
            </h2>
            <p className='mt-6 text-parchment/80 leading-relaxed'>
              Through conferences, outreaches, and ministry assignments, the
              ministry has reached different parts of the world including:
            </p>
          </div>
          <div className='mt-10 flex flex-wrap gap-3'>
            {[
              'Dubai',
              'Ghana',
              'South Africa',
              'United States',
              'Canada',
              'Dublin',
              'Oman',
              'United Kingdom',
              'Cairo',
              'Qatar',
            ].map((c) => (
              <span
                key={c}
                className='rounded-full border border-gold/40 px-5 py-2 text-sm text-parchment/90'
              >
                {c}
              </span>
            ))}
          </div>
          <div className='mt-14'>
            <LightboxGallery images={globalImages} variant='grid' />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className='py-24 lg:py-32 bg-secondary'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Ministry Timeline</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            An interactive <span className='italic text-gold'>journey</span>.
          </h2>
          <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border'>
            {timeline.map((t) => (
              <div key={t.year} className='bg-background group overflow-hidden'>
                <div className='aspect-[3/4] overflow-hidden'>
                  <img
                    src={t.image.src}
                    alt={t.title}
                    loading='lazy'
                    className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='p-6'>
                  <p className='font-display text-3xl text-gold'>{t.year}</p>
                  <p className='mt-1 text-sm font-medium'>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='mt-6 text-xs text-muted-foreground italic'>
            Every image supports captions, full-screen viewing, and mobile
            swipe.
          </p>
        </div>
      </section>

      {/* MESSAGE TO NEXT GEN */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-4xl px-5 lg:px-10 text-center'>
          <p className='gold-divider mx-auto'>Message to the Next Generation</p>
          <blockquote className='mt-8 font-display text-3xl lg:text-4xl italic text-balance leading-snug'>
            "To be added after founder interview."
          </blockquote>
          <p className='mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground'>
            — Prophet Dr. M.O.A. Ajidara
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className='ink-section py-24'>
        <div className='mx-auto max-w-4xl px-5 lg:px-10 text-center'>
          <p className='text-xl text-parchment/90 leading-relaxed'>
            Today, Prophet Dr. M.O.A. Ajidara continues to dedicate his life to
            prayer, teaching, revival, mentoring, and raising believers
            committed to{' '}
            <span className='text-gold italic'>kingdom impact</span> and
            spiritual growth.
          </p>
        </div>
      </section>
    </>
  );
}
