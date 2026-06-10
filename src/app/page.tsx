import { FounderCarousel } from '@/components/FounderCarousel';
import { LightboxGallery } from '@/components/LightboxGallery';
import { img } from '@/constants';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FaBullhorn,
  FaChild,
  FaHandsHelping,
  FaMusic,
  FaPrayingHands,
  FaUsers,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Home — Cherubim & Seraphim New Generation Revelation Ministry',
  description:
    'A place of prayer, worship, transformation, and divine revelation. Visit us in Ota or Lagos.',
  openGraph: {
    title: 'Cherubim & Seraphim New Generation Revelation Ministry',
    description:
      'A place of prayer, worship, transformation, and divine revelation.',
  },
};

const ministries = [
  {
    icon: FaChild,
    name: 'Youth Ministry',
    desc: 'Raising bold, spiritually-grounded young believers.',
  },
  {
    icon: FaUsers,
    name: "Women's Ministry",
    desc: 'Sisters in fellowship, prayer, and kingdom purpose.',
  },
  {
    icon: FaHandsHelping,
    name: "Men's Ministry",
    desc: 'Building men of integrity, faith and service.',
  },
  {
    icon: FaMusic,
    name: 'Choir Ministry',
    desc: 'Worship unto the Lord through song and sound.',
  },
  {
    icon: FaPrayingHands,
    name: 'Prayer Department',
    desc: 'Standing in the gap through fervent intercession.',
  },
  {
    icon: FaBullhorn,
    name: 'Evangelism Team',
    desc: 'Carrying the gospel to streets, homes and nations.',
  },
];

const galleryPreview = [
  {
    src: img.image_d,
    title: 'Sunday Worship',
    description: 'Choir ministrations lifting praise to the Most High.',
  },
  {
    src: img.image_m,
    title: 'Night of Revival',
    description: 'Open-air crusade reaching the lost in our community.',
  },
  {
    src: img.image_e,
    title: 'Hour of Impartation',
    description: 'Prophet ministering at the altar of healing.',
  },
  {
    src: img.image_g,
    title: 'River Baptism',
    description: 'New believers entering the covenant by water.',
  },
  {
    src: img.image_h,
    title: 'Evening Watch',
    description: 'Stillness before God in the late candle hour.',
  },
  {
    src: img.image_j,
    title: 'International Pulpit',
    description: 'Carrying the Word across nations.',
  },
  {
    src: img.image_f,
    title: 'Youth Encounter',
    description: 'A generation lifting up holy hands.',
  },
  {
    src: img.image_i,
    title: "Women's Fellowship",
    description: 'Daughters of Zion gathered in unity.',
  },
];

export default function Home() {
  const founderImages = [
    img.image_p,
    img.image_r,
    img.founder3,
    img.founder7,
    img.founder8,
  ];

  return (
    <>
      {/* HERO */}
      <section className='relative min-h-[100vh] flex items-end overflow-hidden'>
        <img
          src={img.heroWorship.src}
          alt='Worship at Cherubim & Seraphim'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent' />

        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-20 lg:pb-32 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Est. 2008 · Ota · Lagos</p>
          <h1 className='mt-6 font-display text-4xl sm:text-6xl lg:text-7xl text-parchment leading-[1.05] text-balance max-w-4xl'>
            Welcome to Cherubim & Seraphim{' '}
            <span className='italic text-gold'>New Generation</span> Revelation
            Ministry
          </h1>
          <p className='mt-6 max-w-2xl text-lg text-parchment/85 leading-relaxed'>
            A place of prayer, worship, transformation, and divine revelation.
            Whether you are visiting for the first time or searching for a
            church family, you are welcome here.
          </p>
          <div className='mt-10 flex flex-wrap gap-3'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
            >
              Visit Us <HiArrowRight />
            </Link>
            <Link
              href='/about'
              className='inline-flex items-center gap-2 rounded-full border border-parchment/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-parchment hover:bg-parchment hover:text-ink transition'
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-parchment/60 text-xs uppercase tracking-[0.3em] animate-pulse'>
          Scroll
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className='relative py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          <div className='relative'>
            <img
              src={img.image_a}
              alt='Church auditorium'
              loading='lazy'
              className='w-full rounded-sm frame-gold'
            />
            <div className='absolute -bottom-6 -right-6 hidden md:block bg-ink text-parchment p-6 max-w-[220px] rounded-sm'>
              <p className='font-display text-4xl text-gold'>17+</p>
              <p className='text-xs uppercase tracking-[0.2em] mt-1 text-parchment/80'>
                Years of Ministry
              </p>
            </div>
          </div>
          <div>
            <p className='gold-divider'>About the Ministry</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl text-balance leading-tight'>
              Raising a generation rooted in{' '}
              <span className='italic text-gold'>divine revelation</span>.
            </h2>
            <div className='mt-6 space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                Founded in 2008 by Prophet Dr. M.O.A. Ajidara, Cherubim and
                Seraphim New Generation Revelation Ministry continues to impact
                lives through prayer, teaching, evangelism, mentorship, and
                kingdom service.
              </p>
              <p>
                The ministry was established with a divine vision to raise a new
                generation of spiritually sound believers and leaders who will
                boldly represent God in today's world.
              </p>
            </div>
            <Link
              href='/about'
              className='mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink border-b-2 border-gold pb-1 hover:gap-3 transition-all'
            >
              About the Ministry <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className='relative ink-section py-24 lg:py-32 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/3 h-full opacity-10'>
          <div className='absolute inset-0 bg-gradient-to-l from-gold to-transparent' />
        </div>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative'>
          <div className='lg:col-span-5'>
            <FounderCarousel images={founderImages} />
          </div>
          <div className='lg:col-span-7'>
            <p className='gold-divider text-gold-soft'>Meet our Founder</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl text-parchment leading-tight'>
              Prophet Dr. M.O.A.{' '}
              <span className='italic text-gold'>Ajidara</span>
            </h2>
            <p className='mt-2 text-sm uppercase tracking-[0.3em] text-gold-soft'>
              Founder & General Overseer
            </p>
            <p className='mt-6 text-parchment/80 leading-relaxed max-w-2xl'>
              Through years of dedication, prayer, and spiritual leadership,
              Prophet Dr. Ajidara has continued to guide believers toward
              growth, transformation, and deeper fellowship with God — raising
              apostles, evangelists, and leaders across nations.
            </p>
            <Link
              href='/founder'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
            >
              Read Full Biography <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      {/* <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14'>
            <div className='max-w-2xl'>
              <p className='gold-divider'>Our Ministries</p>
              <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
                Six expressions of one{' '}
                <span className='italic text-gold'>calling</span>.
              </h2>
            </div>
            <p className='text-muted-foreground max-w-md'>
              Each ministry is focused on spiritual growth, service,
              discipleship, and community impact.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border'>
            {ministries.map((m) => (
              <div
                key={m.name}
                className='group bg-background p-8 lg:p-10 hover:bg-ink hover:text-parchment transition-colors duration-500'
              >
                <m.icon className='text-3xl text-gold' />
                <h3 className='mt-6 font-display text-2xl'>{m.name}</h3>
                <p className='mt-3 text-sm text-muted-foreground group-hover:text-parchment/70 transition-colors'>
                  {m.desc}
                </p>
                <Link
                  href='/ministries'
                  className='mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-0.5'
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* EVENTS */}
      <section className='relative py-24 bg-secondary'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='gold-divider'>Upcoming Events</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
              Stay connected with our{' '}
              <span className='italic text-gold'>latest revivals</span>.
            </h2>
            <p className='mt-6 text-muted-foreground leading-relaxed max-w-lg'>
              Revival programs, worship services, conferences, crusades, and
              special gatherings — every meeting is an invitation into God's
              presence.
            </p>
            <Link
              href='/events'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-parchment hover:bg-ink-soft transition'
            >
              View All Events <HiArrowRight />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <img
              src={img.image_b}
              alt='Night of revival'
              loading='lazy'
              className='w-full aspect-[3/4] object-cover rounded-sm translate-y-6'
            />
            <img
              src={img.image_c}
              alt='Sunday worship'
              loading='lazy'
              className='w-full aspect-[3/4] object-cover rounded-sm'
            />
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12'>
            <div>
              <p className='gold-divider'>Gallery</p>
              <h2 className='mt-5 font-display text-4xl lg:text-5xl leading-tight'>
                Moments captured in{' '}
                <span className='italic text-gold'>His presence</span>.
              </h2>
            </div>
            <Link
              href='/gallery'
              className='inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink border-b-2 border-gold pb-1 hover:gap-3 transition-all w-fit'
            >
              Explore Gallery <HiArrowRight />
            </Link>
          </div>
          <LightboxGallery images={galleryPreview} />
          <p className='mt-6 text-xs text-muted-foreground italic text-center'>
            Tap any image to open the full-screen viewer with captions and
            swipe.
          </p>
        </div>
      </section>

      {/* SERMONS */}
      {/* <section className='ink-section py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center'>
          <div className='relative aspect-video rounded-sm overflow-hidden frame-gold group cursor-pointer'>
            <img
              src={img.bible.src}
              alt='Sermon'
              loading='lazy'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-ink/40 flex items-center justify-center'>
              <div className='h-20 w-20 rounded-full bg-gold/95 flex items-center justify-center text-ink group-hover:scale-110 transition-transform'>
                <HiPlay size={32} className='ml-1' />
              </div>
            </div>
          </div>
          <div>
            <p className='gold-divider text-gold-soft'>Sermons & Teachings</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl text-parchment leading-tight'>
              Life-transforming messages for your{' '}
              <span className='italic text-gold'>spiritual journey</span>.
            </h2>
            <p className='mt-6 text-parchment/80 leading-relaxed max-w-lg'>
              Listen to teachings and revival ministrations designed to
              strengthen your faith, deepen your walk with God, and renew your
              mind in the Word.
            </p>
            <Link
              href='/sermons'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
            >
              Watch Sermons <HiArrowRight />
            </Link>
          </div>
        </div>
      </section> */}

      {/* CONTACT TEASER */}
      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-5xl px-5 lg:px-10 text-center'>
          <p className='gold-divider mx-auto'>Plan a Visit</p>
          <h2 className='mt-5 font-display text-4xl lg:text-5xl text-balance leading-tight'>
            Come worship with us this{' '}
            <span className='italic text-gold'>Sunday</span>.
          </h2>
          <div className='mt-10 grid sm:grid-cols-2 gap-6'>
            <div className='p-8 border border-border bg-card text-left rounded-sm'>
              <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                Headquarters
              </p>
              <p className='mt-3 font-display text-xl'>
                Ijagba Ota, Ogun State
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                Off Obasanjo Farm
              </p>
            </div>
            <div className='p-8 border border-border bg-card text-left rounded-sm'>
              <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                Lagos Branch
              </p>
              <p className='mt-3 font-display text-xl'>Ayobo Area, Lagos</p>
              <p className='text-sm text-muted-foreground mt-1'>Lagos State</p>
            </div>
          </div>
          <Link
            href='/contact'
            className='mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-parchment hover:bg-ink-soft transition'
          >
            Get Directions <HiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
