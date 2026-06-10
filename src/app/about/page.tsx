import { LightboxGallery } from '@/components/LightboxGallery';
import { img } from '@/constants';
import type { Metadata } from 'next';
import { HiCheckCircle } from 'react-icons/hi';

import { StaticImageData } from 'next/image';

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
  image: string | StaticImageData;
};

export const metadata: Metadata = {
  title: 'About — Cherubim & Seraphim New Generation Revelation Ministry',
  description:
    'Christ-centered ministry founded in 2008. Vision, mission, beliefs, and journey.',
  openGraph: {
    title: 'About the Ministry',
    description: 'Founded 2008. Raising a generation of revelation.',
  },
};

export default function About() {
  const beliefs = [
    'The power of prayer',
    'The transforming Word of God',
    'Evangelism and soul winning',
    'Spiritual growth and discipleship',
    'Raising kingdom leaders',
    'Restoration and healing',
  ];

  const timeline: TimelineItem[] = [
    {
      year: '2008',
      title: 'Ministry Founded',
      desc: 'The ministry is born from a divine revelation in Ogun State.',
      image: img.founded,
    },
    {
      year: '2010',
      title: 'Early Worship Gatherings',
      desc: 'Intimate prayer meetings gather a growing remnant.',
      image: img.early,
    },
    {
      year: '2014',
      title: 'Church Growth & Expansion',
      desc: 'The auditorium fills as new families join the fold.',
      image: img.growth,
    },
    {
      year: '2018',
      title: 'International Assignments',
      desc: 'Ministry crosses borders — UK, US, Dubai, and beyond.',
      image: img.international,
    },
    {
      year: '2026',
      title: 'Present-Day Ministry',
      desc: 'A generation continues to be raised in spirit and truth.',
      image: img.image_a,
    },
  ];

  const timelineImages = timeline.map((t) => ({
    src: typeof t.image === 'string' ? t.image : t.image.src,
    title: `${t.year} — ${t.title}`,
    description: t.desc,
  }));

  return (
    <>
      {/* HERO */}
      <section className='relative h-[70vh] min-h-[500px] flex items-end overflow-hidden'>
        <img
          src={img.image_a}
          alt='Congregation'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-16 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>About the Ministry</p>
          <h1 className='mt-6 font-display text-5xl lg:text-7xl text-parchment leading-[1.05] max-w-4xl'>
            A Christ-centered ministry revealing the{' '}
            <span className='italic text-gold'>power of God</span>.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-4xl px-5 lg:px-10 prose-styling'>
          <p className='text-xl leading-relaxed text-foreground/90'>
            Cherubim and Seraphim New Generation Revelation Ministry is
            committed to revealing the power of God through prayer, worship,
            teaching, evangelism, and spiritual transformation.
          </p>
          <p className='mt-6 text-muted-foreground leading-relaxed'>
            Established in 2008, the ministry was founded with a divine vision
            to raise a new generation of believers and leaders who would boldly
            represent God with wisdom, truth, and spiritual understanding. Our
            mission is centered on helping people grow spiritually, discover
            purpose, strengthen their faith, and experience the transforming
            power of God in every area of life.
          </p>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className='bg-secondary py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-2 gap-px bg-border'>
          <div className='bg-background p-12'>
            <p className='gold-divider'>Our Vision</p>
            <h3 className='mt-5 font-display text-3xl leading-tight'>
              To raise a generation filled with divine revelation, spiritual
              discipline, and kingdom purpose.
            </h3>
          </div>
          <div className='bg-background p-12'>
            <p className='gold-divider'>Our Mission</p>
            <h3 className='mt-5 font-display text-3xl leading-tight'>
              To spread the gospel of Jesus Christ while building lives through
              prayer, teaching, mentorship, and empowerment.
            </h3>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-start'>
          <div>
            <p className='gold-divider'>What We Believe</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
              Six convictions that{' '}
              <span className='italic text-gold'>shape everything</span>.
            </h2>
            <img
              src={img.image_p}
              alt='Open Bible'
              loading='lazy'
              className='mt-10 w-full rounded-sm frame-gold'
            />
          </div>
          <ul className='space-y-1'>
            {beliefs.map((b, i) => (
              <li
                key={b}
                className='flex items-start gap-5 py-6 border-b border-border last:border-0'
              >
                <span className='font-display text-2xl text-gold w-10'>
                  0{i + 1}
                </span>
                <div className='flex-1'>
                  <p className='font-display text-2xl'>{b}</p>
                </div>
                <HiCheckCircle className='text-gold text-2xl mt-1' />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className='ink-section py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <p className='gold-divider text-gold-soft mx-auto'>
              Ministry Journey
            </p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl text-parchment leading-tight'>
              From 2008 to today — a path of{' '}
              <span className='italic text-gold'>grace</span>.
            </h2>
            <p className='mt-4 text-parchment/70 text-sm'>
              Tap any photo to open the full-screen viewer.
            </p>
          </div>

          <div className='mt-20 relative'>
            <div className='absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-px' />
            <div className='space-y-16'>
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className='absolute left-4 lg:left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-ink' />
                  <div className='pl-12 lg:pl-0 lg:pr-12 lg:text-right'>
                    <p className='font-display text-5xl text-gold'>{t.year}</p>
                    <h3 className='mt-3 font-display text-2xl text-parchment'>
                      {t.title}
                    </h3>
                    <p className='mt-3 text-parchment/70 max-w-md lg:ml-auto'>
                      {t.desc}
                    </p>
                  </div>
                  <div className='pl-12 lg:pl-0 lg:pl-12'>
                    <div className='aspect-[4/3] overflow-hidden rounded-sm'>
                      <img
                        src={
                          typeof t.image === 'string' ? t.image : t.image.src
                        }
                        alt={t.title}
                        loading='lazy'
                        className='h-full w-full object-cover'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-20'>
            <p className='text-center text-xs uppercase tracking-[0.3em] text-gold mb-6'>
              Open the Journey
            </p>
            <LightboxGallery images={timelineImages} variant='grid' />
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <p className='gold-divider'>Locations</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
            Find us across <span className='italic text-gold'>two cities</span>.
          </h2>
          <div className='mt-12 grid md:grid-cols-2 gap-6'>
            <div className='p-10 border border-border bg-card rounded-sm'>
              <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                Headquarters
              </p>
              <h3 className='mt-3 font-display text-2xl'>Ota Headquarters</h3>
              <p className='mt-2 text-muted-foreground'>
                Ijagba Ota, Off Obasanjo Farm, Ogun State
              </p>
            </div>
            <div className='p-10 border border-border bg-card rounded-sm'>
              <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                Branch
              </p>
              <h3 className='mt-3 font-display text-2xl'>Lagos Branch</h3>
              <p className='mt-2 text-muted-foreground'>
                Ayobo Area, Lagos State
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
