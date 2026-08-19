'use client';
import { useEffect } from 'react';
import { HiX, HiZoomIn } from 'react-icons/hi';

interface FlyerModalProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function FlyerModal({ src, alt, open, onClose }: FlyerModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={alt}
      onClick={onClose}
      className='fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in'
    >
      <button
        onClick={onClose}
        className='absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-parchment/10 text-parchment flex items-center justify-center hover:bg-parchment/20 transition'
        aria-label='Close flyer'
      >
        <HiX size={20} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className='relative max-w-3xl w-full max-h-[90vh] overflow-auto rounded-sm'
      >
        <img
          src={src}
          alt={alt}
          className='w-full h-auto object-contain'
        />
        <p className='absolute bottom-3 right-3 flex items-center gap-1 text-xs text-parchment/60 bg-ink/60 px-2 py-1 rounded'>
          <HiZoomIn size={14} /> Pinch or scroll to zoom
        </p>
      </div>
    </div>
  );
}
