import { img } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ministries — Cherubim & Seraphim NGRM',
  description:
    "Youth, Women's, Men's, Choir, Prayer, and Evangelism ministries.",
  openGraph: {
    title: 'Our Ministries',
    description:
      'Six expressions of one calling — service, growth, and discipleship.',
  },
};

const ministries = [
  {
    name: 'Youth Ministry',
    leader: 'Pastor Tunde A.',
    desc: 'Raising the next generation of bold, spiritually-grounded believers through teaching, fellowship, and mentorship.',
    image: img.youth,
  },
  {
    name: "Women's Ministry",
    leader: 'Mrs. Grace O.',
    desc: 'A sisterhood of prayer, encouragement, and kingdom purpose — daughters of Zion equipped for impact.',
    image: img.women,
  },
  {
    name: "Men's Ministry",
    leader: 'Bro. Samuel I.',
    desc: 'Building men of integrity, fathers and leaders rooted in faith, service, and accountability.',
    image: img.men,
  },
  {
    name: 'Choir Ministry',
    leader: 'Min. Esther B.',
    desc: "Worship unto the Lord through song and sound — leading the congregation into God's presence.",
    image: img.choir,
  },
  {
    name: 'Prayer Department',
    leader: 'Evang. Joseph K.',
    desc: 'Standing in the gap through fervent intercession, watch-nights, and corporate prayer.',
    image: img.prayer,
  },
  {
    name: 'Evangelism Team',
    leader: 'Evang. Mary E.',
    desc: 'Carrying the gospel to streets, homes and nations — a team committed to soul-winning.',
    image: img.evangelism,
  },
];

export default function Ministries() {
  return (
    <>
      <section className='relative h-[55vh] min-h-[420px] flex items-end overflow-hidden'>
        <img
          src={img.choir.src}
          alt='Ministries'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Our Ministries</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            Find your place to{' '}
            <span className='italic text-gold'>serve & grow</span>.
          </h1>
        </div>
      </section>

      <section className='py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {ministries.map((m) => (
            <article
              key={m.name}
              className='group relative overflow-hidden bg-card border border-border rounded-sm'
            >
              <div className='aspect-[4/5] overflow-hidden'>
                <img
                  src={m.image.src}
                  alt={m.name}
                  loading='lazy'
                  className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
                />
              </div>
              <div className='p-7'>
                <p className='text-xs uppercase tracking-[0.3em] text-gold'>
                  {m.leader}
                </p>
                <h3 className='mt-3 font-display text-2xl'>{m.name}</h3>
                <p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
                  {m.desc}
                </p>
              </div>
              <div className='absolute top-4 left-4 bg-ink text-parchment text-xs uppercase tracking-[0.25em] px-3 py-1.5'>
                Ministry
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
