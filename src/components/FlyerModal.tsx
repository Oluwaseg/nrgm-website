import { useEffect, useRef, useState } from 'react';
import { HiDownload, HiX, HiZoomIn, HiZoomOut } from 'react-icons/hi';

interface Props {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

/** Responsive, scroll/zoomable flyer viewer that keeps the whole artwork intact. */
export function FlyerModal({ open, onClose, src, alt, caption }: Props) {
  const [zoom, setZoom] = useState(1);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setZoom(1);
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={alt}
      onClick={onClose}
      className='fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm'
    >
      <div className='absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 p-4'>
        <p className='text-xs uppercase tracking-[0.3em] text-gold truncate'>
          {caption ?? 'Official Flyer'}
        </p>
        <div
          className='flex items-center gap-2'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type='button'
            aria-label='Zoom out'
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(2)))}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-parchment/30 text-parchment hover:bg-parchment/10 transition'
          >
            <HiZoomOut />
          </button>
          <button
            type='button'
            aria-label='Zoom in'
            onClick={() => setZoom((z) => Math.min(4, +(z + 0.5).toFixed(2)))}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-parchment/30 text-parchment hover:bg-parchment/10 transition'
          >
            <HiZoomIn />
          </button>
          <a
            href={src}
            download
            aria-label='Download flyer'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-parchment/30 text-parchment hover:bg-parchment/10 transition'
          >
            <HiDownload />
          </a>
          <button
            ref={closeRef}
            type='button'
            aria-label='Close flyer'
            onClick={onClose}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink hover:bg-gold-soft transition'
          >
            <HiX />
          </button>
        </div>
      </div>

      <div className='absolute inset-0 overflow-auto px-4 pb-16 pt-20 overscroll-contain'>
        <div
          className='mx-auto w-full max-w-3xl'
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            style={{ width: `${zoom * 100}%` }}
            className='mx-auto h-auto max-w-none rounded-sm shadow-2xl transition-[width] duration-300'
          />
        </div>
      </div>

      <p className='absolute inset-x-0 bottom-0 p-3 text-center text-[11px] text-parchment/60'>
        Pinch or use the zoom buttons to read the fine print · Esc to close
      </p>
    </div>
  );
}
