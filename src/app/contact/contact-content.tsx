'use client';
import { img } from '@/constants';
import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export function ContactContent() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className='relative h-[50vh] min-h-[400px] flex items-end overflow-hidden'>
        <img
          src={img.auditorium.src}
          alt='Contact'
          fetchPriority='high'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 hero-veil' />
        <div className='relative mx-auto max-w-7xl px-5 lg:px-10 pb-14 pt-32 w-full'>
          <p className='gold-divider text-gold-soft'>Contact Us</p>
          <h1 className='mt-5 font-display text-5xl lg:text-7xl text-parchment leading-tight max-w-3xl'>
            We'd love to <span className='italic text-gold'>hear from you</span>
            .
          </h1>
        </div>
      </section>

      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-16'>
          {/* INFO */}
          <div>
            <p className='gold-divider'>Get in Touch</p>
            <h2 className='mt-5 font-display text-4xl lg:text-5xl'>
              Visit, call, or send a{' '}
              <span className='italic text-gold'>message</span>.
            </h2>

            <div className='mt-10 space-y-6'>
              <div className='flex gap-5 p-6 border border-border bg-card rounded-sm'>
                <HiLocationMarker className='text-gold text-2xl shrink-0 mt-0.5' />
                <div>
                  <p className='font-display text-xl'>Ota Headquarters</p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Ijagba Ota, Off Obasanjo Farm, Ogun State
                  </p>
                </div>
              </div>
              <div className='flex gap-5 p-6 border border-border bg-card rounded-sm'>
                <HiLocationMarker className='text-gold text-2xl shrink-0 mt-0.5' />
                <div>
                  <p className='font-display text-xl'>Lagos Branch</p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Ayobo Area, Lagos State
                  </p>
                </div>
              </div>
              <div className='grid sm:grid-cols-2 gap-4'>
                <a
                  href='tel:+2348065091163'
                  className='flex items-center gap-4 p-6 border border-border bg-card rounded-sm hover:border-gold transition'
                >
                  <FaPhoneAlt className='text-gold text-xl' />
                  <div>
                    <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground'>
                      Hotline
                    </p>
                    <p className='font-medium'>08065091163</p>
                  </div>
                </a>
                <a
                  href='https://wa.me/2349151043803'
                  className='flex items-center gap-4 p-6 border border-border bg-card rounded-sm hover:border-gold transition'
                >
                  <FaWhatsapp className='text-gold text-xl' />
                  <div>
                    <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground'>
                      WhatsApp
                    </p>
                    <p className='font-medium'>09151043803</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='mt-10 aspect-video w-full overflow-hidden rounded-sm border border-border'>
              <iframe
                title='Map — Ota Headquarters'
                src='https://www.google.com/maps?q=Ijagba+Ota+Ogun+State&output=embed'
                className='w-full h-full'
                loading='lazy'
              />
            </div>
          </div>

          {/* FORM */}
          <div>
            <div className='bg-ink text-parchment p-10 rounded-sm'>
              <p className='gold-divider text-gold-soft'>Prayer Request</p>
              <h3 className='mt-5 font-display text-3xl text-parchment'>
                Send us a request or a{' '}
                <span className='italic text-gold'>message</span>.
              </h3>

              {sent ? (
                <div className='mt-10 p-8 border border-gold/40 rounded-sm text-center'>
                  <HiMail className='text-gold text-4xl mx-auto' />
                  <p className='mt-4 font-display text-2xl'>Thank you</p>
                  <p className='mt-2 text-sm text-parchment/70'>
                    Your request has been received. We will be in touch and lift
                    you up in prayer.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className='mt-8 space-y-5'
                >
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <input
                      required
                      placeholder='Full Name'
                      className='w-full bg-transparent border-b border-parchment/30 py-3 text-parchment placeholder:text-parchment/40 focus:outline-none focus:border-gold transition'
                    />
                    <input
                      required
                      type='email'
                      placeholder='Email'
                      className='w-full bg-transparent border-b border-parchment/30 py-3 text-parchment placeholder:text-parchment/40 focus:outline-none focus:border-gold transition'
                    />
                  </div>
                  <input
                    placeholder='Phone (optional)'
                    className='w-full bg-transparent border-b border-parchment/30 py-3 text-parchment placeholder:text-parchment/40 focus:outline-none focus:border-gold transition'
                  />
                  <select className='w-full bg-transparent border-b border-parchment/30 py-3 text-parchment focus:outline-none focus:border-gold transition'>
                    <option className='text-ink'>Prayer Request</option>
                    <option className='text-ink'>General Inquiry</option>
                    <option className='text-ink'>Plan a Visit</option>
                    <option className='text-ink'>Partnership</option>
                  </select>
                  <textarea
                    required
                    rows={5}
                    placeholder='Your message or prayer point...'
                    className='w-full bg-transparent border-b border-parchment/30 py-3 text-parchment placeholder:text-parchment/40 focus:outline-none focus:border-gold transition resize-none'
                  />
                  <button
                    type='submit'
                    className='w-full rounded-full bg-gold py-3.5 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold-soft transition'
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
