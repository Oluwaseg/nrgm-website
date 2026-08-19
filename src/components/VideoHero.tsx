'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HiPlay, HiX } from 'react-icons/hi';

const VIDEO_URL = 'https://res.cloudinary.com/depnalr40/video/upload/v1787138665/VID-20260809-WA0004_mof8zb.mp4'; // Replace with Cloudinary video URL

const MUTE_KEY = 'nrgm_video_muted';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(MUTE_KEY);
    if (stored === 'false') {
      setMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (videoRef.current) videoRef.current.muted = next;
      sessionStorage.setItem(MUTE_KEY, String(next));
      return next;
    });
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
    if (videoRef.current) videoRef.current.pause();
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    if (videoRef.current) videoRef.current.play();
    if (modalVideoRef.current) modalVideoRef.current.pause();
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeModal]);

  if (!VIDEO_URL) return null;

  return (
    <>
      {/* Inline hero video section */}
      <section className='relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden'>
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          loop
          muted={muted}
          playsInline
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent' />

        {/* Mute/unmute control */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className='absolute top-24 right-5 lg:right-10 z-10 h-11 w-11 rounded-full bg-ink/60 backdrop-blur-sm border border-parchment/20 flex items-center justify-center text-parchment hover:bg-ink/80 transition'
        >
          <span className='text-lg'>{muted ? '\u{1F507}' : '\u{1F50A}'}</span>
        </button>

        {/* Watch Full Video button */}
        <button
          onClick={openModal}
          className='absolute top-24 right-20 lg:right-24 z-10 inline-flex items-center gap-2 rounded-full bg-gold/90 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-ink hover:bg-gold transition'
        >
          <HiPlay size={14} /> Watch Full Video
        </button>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-parchment/60 text-xs uppercase tracking-[0.3em] animate-pulse'>
          Scroll
        </div>
      </section>

      {/* Full video modal */}
      {modalOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label='Full video player'
          onClick={closeModal}
          className='fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in'
        >
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-parchment/10 text-parchment flex items-center justify-center hover:bg-parchment/20 transition'
            aria-label='Close video'
          >
            <HiX size={20} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className='relative w-full max-w-5xl aspect-video rounded-sm overflow-hidden bg-black'
          >
            <video
              ref={modalVideoRef}
              src={VIDEO_URL}
              controls
              autoPlay
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
}
