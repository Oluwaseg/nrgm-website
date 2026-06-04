import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

export function Footer() {
  return (
    <footer className='relative ink-section mt-24'>
      <div className='absolute inset-x-0 top-0 gold-rule' />
      <div className='mx-auto max-w-7xl px-5 lg:px-10 py-16 grid gap-12 lg:grid-cols-4'>
        <div className='lg:col-span-2 max-w-md'>
          <div className='flex items-center gap-3'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-br from-gold to-ember p-[2px]'>
              <div className='h-full w-full rounded-full bg-ink flex items-center justify-center'>
                <span className='font-display text-sm text-gold'>C&S</span>
              </div>
            </div>
            <div>
              <div className='font-display text-lg'>Cherubim & Seraphim</div>
              <div className='text-[10px] uppercase tracking-[0.25em] text-gold-soft'>
                New Generation Revelation Ministry
              </div>
            </div>
          </div>
          <p className='mt-6 text-sm text-parchment/70 leading-relaxed'>
            A place of prayer, worship, transformation, and divine revelation —
            raising believers who are spiritually grounded, purpose-driven, and
            empowered through the Word of God.
          </p>
          <div className='mt-6 flex gap-3'>
            <a
              href='#'
              className='h-10 w-10 grid place-items-center rounded-full border border-parchment/20 hover:bg-gold hover:text-ink hover:border-gold transition'
            >
              <FaFacebook />
            </a>
            <a
              href='#'
              className='h-10 w-10 grid place-items-center rounded-full border border-parchment/20 hover:bg-gold hover:text-ink hover:border-gold transition'
            >
              <FaInstagram />
            </a>
            <a
              href='#'
              className='h-10 w-10 grid place-items-center rounded-full border border-parchment/20 hover:bg-gold hover:text-ink hover:border-gold transition'
            >
              <FaYoutube />
            </a>
            <a
              href='https://wa.me/2349151043803'
              className='h-10 w-10 grid place-items-center rounded-full border border-parchment/20 hover:bg-gold hover:text-ink hover:border-gold transition'
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className='font-display text-gold text-sm uppercase tracking-[0.25em]'>
            Visit
          </h4>
          <div className='mt-5 space-y-5 text-sm text-parchment/80'>
            <div className='flex gap-3'>
              <HiLocationMarker className='mt-0.5 text-gold shrink-0' />
              <div>
                <div className='font-medium text-parchment'>Headquarters</div>
                <div className='text-parchment/70'>
                  Ijagba Ota, Off Obasanjo Farm, Ogun State
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              <HiLocationMarker className='mt-0.5 text-gold shrink-0' />
              <div>
                <div className='font-medium text-parchment'>Lagos Branch</div>
                <div className='text-parchment/70'>Ayobo Area, Lagos State</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className='font-display text-gold text-sm uppercase tracking-[0.25em]'>
            Connect
          </h4>
          <ul className='mt-5 space-y-3 text-sm'>
            <li>
              <a
                href='tel:+2348065091163'
                className='flex items-center gap-3 text-parchment/80 hover:text-gold'
              >
                <FaPhoneAlt className='text-gold text-xs' /> 08065091163
              </a>
            </li>
            <li>
              <a
                href='https://wa.me/2349151043803'
                className='flex items-center gap-3 text-parchment/80 hover:text-gold'
              >
                <FaWhatsapp className='text-gold' /> 09151043803
              </a>
            </li>
          </ul>
          <h4 className='font-display text-gold text-sm uppercase tracking-[0.25em] mt-8'>
            Explore
          </h4>
          <ul className='mt-5 space-y-2 text-sm'>
            <li>
              <Link href='/about' className='text-parchment/80 hover:text-gold'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='/ministries'
                className='text-parchment/80 hover:text-gold'
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                href='/sermons'
                className='text-parchment/80 hover:text-gold'
              >
                Sermons
              </Link>
            </li>
            <li>
              <Link
                href='/donate'
                className='text-parchment/80 hover:text-gold'
              >
                Give
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-parchment/10'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 py-6 text-xs text-parchment/50 flex flex-col sm:flex-row justify-between gap-2'>
          <p>
            © 2026 Cherubim & Seraphim New Generation Revelation Ministry. All
            Rights Reserved.
          </p>
          <p>Built with reverence.</p>
        </div>
      </div>
    </footer>
  );
}
