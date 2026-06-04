'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FounderCarouselProps {
  images: string[];
}

export function FounderCarousel({ images }: FounderCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative max-w-md mx-auto h-[600px]'>
      <div className='absolute -inset-3 border border-gold/50' />

      <Image
        src={images[currentImage]}
        alt='Prophet Dr. M.O.A. Ajidara'
        fill
        priority
        sizes='(max-width: 768px) 100vw, 448px'
        className='object-cover transition-opacity duration-700'
      />
    </div>
  );
}
