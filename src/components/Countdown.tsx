import { useEffect, useState } from 'react';

/** Live countdown to a target date. Tone: 'dark' tiles on light bg, 'light' on ink. */
export function Countdown({
  target,
  tone = 'dark',
}: {
  target: string;
  tone?: 'dark' | 'light';
}) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(
    0,
    new Date(target).getTime() - (now ?? new Date(target).getTime())
  );
  const parts: [string, number][] = [
    ['Days', Math.floor(diff / 86400000)],
    ['Hrs', Math.floor((diff % 86400000) / 3600000)],
    ['Min', Math.floor((diff % 3600000) / 60000)],
    ['Sec', Math.floor((diff % 60000) / 1000)],
  ];

  return (
    <div className='grid grid-cols-4 gap-2 text-center'>
      {parts.map(([label, value]) => (
        <div
          key={label}
          className={
            tone === 'light'
              ? 'rounded-sm border border-parchment/20 bg-parchment/5 py-3'
              : 'rounded-sm bg-ink py-3'
          }
        >
          <div className='font-display text-2xl text-gold'>
            {String(value).padStart(2, '0')}
          </div>
          <div className='text-[10px] uppercase tracking-widest text-parchment/60'>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
