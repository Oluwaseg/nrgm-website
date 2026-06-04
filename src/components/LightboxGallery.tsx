'use client';
import { useEffect, useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

export type GalleryImage = {
  src: string;
  title: string;
  description?: string;
  /** Optional aspect hint for masonry: 'tall' | 'wide' | 'square' */
  shape?: 'tall' | 'wide' | 'square';
};

interface Props {
  images: GalleryImage[];
  /** 'masonry' (varied heights) | 'grid' (uniform) */
  variant?: 'masonry' | 'grid';
  className?: string;
  /** Accessible name for the gallery region */
  ariaLabel?: string;
}

export function LightboxGallery({
  images,
  variant = 'masonry',
  className = '',
  ariaLabel = 'Image gallery',
}: Props) {
  const [index, setIndex] = useState(-1);
  // Track the trigger so focus returns to it after the lightbox closes (a11y).
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastTriggerIndex = useRef<number>(-1);

  const open = (i: number) => {
    lastTriggerIndex.current = i;
    setIndex(i);
  };

  const close = () => {
    setIndex(-1);
    // Restore focus to the triggering thumbnail (WCAG 2.4.3 / 2.4.11)
    requestAnimationFrame(() => {
      triggerRefs.current[lastTriggerIndex.current]?.focus();
    });
  };

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.title,
    title: img.title,
    description: img.description,
  }));

  const tiles = images.map((img, i) => (
    <GalleryTile
      key={i}
      img={img}
      index={i}
      total={images.length}
      onClick={() => open(i)}
      aspect={variant === 'grid' ? 'aspect-square' : undefined}
      buttonRef={(el) => {
        triggerRefs.current[i] = el;
      }}
    />
  ));

  return (
    <>
      <div
        role='region'
        aria-label={ariaLabel}
        className={
          variant === 'grid'
            ? `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 ${className}`
            : `columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 ${className}`
        }
      >
        {variant === 'grid'
          ? tiles
          : tiles.map((t, i) => (
              <div key={i} className='mb-3 sm:mb-4 break-inside-avoid'>
                {t}
              </div>
            ))}
      </div>
      <LightboxRoot
        slides={slides}
        index={index}
        close={close}
        setIndex={setIndex}
      />
    </>
  );
}

function GalleryTile({
  img,
  index,
  total,
  onClick,
  aspect,
  buttonRef,
}: {
  img: GalleryImage;
  index: number;
  total: number;
  onClick: () => void;
  aspect?: string;
  buttonRef: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={buttonRef}
      type='button'
      onClick={onClick}
      aria-label={`Open image ${index + 1} of ${total}: ${img.title}${img.description ? `. ${img.description}` : ''}`}
      aria-haspopup='dialog'
      className={`group relative block w-full overflow-hidden rounded-md bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${aspect ?? ''}`}
    >
      <img
        src={img.src}
        alt={img.title}
        loading='lazy'
        decoding='async'
        sizes='(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw'
        className={`w-full ${aspect ? 'h-full object-cover' : 'h-auto'} transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition duration-500'
      />
      <div
        aria-hidden='true'
        className='absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition duration-500'
      >
        <p className='text-xs uppercase tracking-[0.2em] text-gold'>View</p>
        <p className='mt-1 font-display text-lg text-parchment leading-tight'>
          {img.title}
        </p>
      </div>
    </button>
  );
}

function LightboxRoot({
  slides,
  index,
  close,
  setIndex,
}: {
  slides: { src: string; alt: string; title: string; description?: string }[];
  index: number;
  close: () => void;
  setIndex: (i: number) => void;
}) {
  const open = index >= 0;

  // Lock body scroll while the lightbox is open (prevents background scroll on iOS).
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <Lightbox
      open={open}
      index={Math.max(0, index)}
      close={close}
      on={{ view: ({ index: i }) => setIndex(i) }}
      slides={slides}
      plugins={[Captions, Fullscreen, Zoom, Thumbnails]}
      captions={{ descriptionTextAlign: 'center', showToggle: true }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      animation={{ swipe: 350 }}
      carousel={{ finite: false, preload: 2 }}
      labels={{
        Previous: 'Previous image',
        Next: 'Next image',
        Close: 'Close gallery',
      }}
      styles={{ container: { backgroundColor: 'rgba(15, 15, 25, 0.96)' } }}
    />
  );
}
