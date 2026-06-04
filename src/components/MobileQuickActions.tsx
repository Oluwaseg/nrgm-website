import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export function MobileQuickActions() {
  return (
    <div className='lg:hidden fixed bottom-5 right-5 z-50 flex flex-col gap-3'>
      <a
        href='https://wa.me/2349151043803'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className='group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 active:scale-95 transition'
      >
        <span className='absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30' />
        <FaWhatsapp className='relative text-2xl' />
      </a>
      <a
        href='tel:+2348065091163'
        aria-label='Call church hotline'
        className='flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg shadow-black/20 active:scale-95 transition'
      >
        <FaPhoneAlt className='text-xl' />
      </a>
    </div>
  );
}
