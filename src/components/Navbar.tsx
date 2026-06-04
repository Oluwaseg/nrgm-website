'use client';
import { img } from '@/constants/image';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/founder', label: 'Founder' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-background/95 backdrop-blur border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10'>
        <Link href='/' className='flex items-center gap-3 group'>
          <div className='relative h-16 w-16 shrink-0'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-gold to-ember' />
            <div className='absolute inset-0 rounded-full bg-background overflow-hidden'>
              <Image
                src={img.logo.src}
                alt='Cherubim & Seraphim Logo'
                fill
                className='object-contain '
              />
            </div>
          </div>
          <div className='leading-tight'>
            <div
              className={`font-display text-sm sm:text-base font-semibold transition-colors ${scrolled || open ? 'text-ink' : 'text-parchment'}`}
            >
              Cherubim & Seraphim
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${scrolled || open ? 'text-muted-foreground' : 'text-gold-soft'}`}
            >
              New Generation Revelation Ministry
            </div>
          </div>
        </Link>

        <nav className='hidden lg:flex items-center gap-7'>
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? 'text-ink' : 'text-parchment'
              } ${pathname === l.to ? 'text-gold' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href='/donate'
            className='ml-2 inline-flex items-center rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-gold-soft'
          >
            Give
          </Link>
        </nav>

        <button
          aria-label='Menu'
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded ${scrolled || open ? 'text-ink' : 'text-parchment'}`}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className='lg:hidden border-t border-border bg-background'>
          <div className='flex flex-col px-5 py-4 gap-1'>
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-base font-medium border-b border-border/50 last:border-0 ${pathname === l.to ? 'text-gold' : 'text-ink'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href='/donate'
              onClick={() => setOpen(false)}
              className='mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink'
            >
              Give
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
