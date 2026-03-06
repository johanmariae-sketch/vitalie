'use client';

import { motion } from 'framer-motion';

export function LeafDecoration({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.12, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={`absolute pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}
      width="200"
      height="300"
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 10C60 60 20 120 30 200C40 260 70 290 100 290C130 290 160 260 170 200C180 120 140 60 100 10Z"
        fill="#2b5134"
      />
      <path
        d="M100 30C100 30 100 290 100 290"
        stroke="#2b5134"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path d="M100 80C80 100 55 130 50 170" stroke="#2b5134" strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M100 80C120 100 145 130 150 170" stroke="#2b5134" strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M100 130C85 145 65 165 60 195" stroke="#2b5134" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M100 130C115 145 135 165 140 195" stroke="#2b5134" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M100 180C90 190 75 210 72 230" stroke="#2b5134" strokeWidth="1" opacity="0.25" fill="none" />
      <path d="M100 180C110 190 125 210 128 230" stroke="#2b5134" strokeWidth="1" opacity="0.25" fill="none" />
    </motion.svg>
  );
}

export function StonesDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`absolute pointer-events-none ${className}`}
      width="180"
      height="220"
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="90" cy="185" rx="70" ry="30" fill="#2b5134" />
      <ellipse cx="90" cy="140" rx="55" ry="25" fill="#2b5134" />
      <ellipse cx="90" cy="100" rx="42" ry="22" fill="#2b5134" />
      <ellipse cx="90" cy="65" rx="30" ry="18" fill="#2b5134" />
    </motion.svg>
  );
}

export function BambooDecoration({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0, x: flip ? 20 : -20 }}
      whileInView={{ opacity: 0.08, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={`absolute pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}
      width="60"
      height="400"
      viewBox="0 0 60 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="25" y="0" width="10" height="400" rx="5" fill="#2b5134" />
      <line x1="30" y1="60" x2="30" y2="62" stroke="#3a6644" strokeWidth="12" opacity="0.6" />
      <line x1="30" y1="140" x2="30" y2="142" stroke="#3a6644" strokeWidth="12" opacity="0.6" />
      <line x1="30" y1="220" x2="30" y2="222" stroke="#3a6644" strokeWidth="12" opacity="0.6" />
      <line x1="30" y1="300" x2="30" y2="302" stroke="#3a6644" strokeWidth="12" opacity="0.6" />
      <path d="M30 55C10 30 -5 50 5 20C15 40 25 35 30 55Z" fill="#2b5134" />
      <path d="M30 55C50 30 65 50 55 20C45 40 35 35 30 55Z" fill="#2b5134" />
      <path d="M30 135C10 110 -5 130 5 100C15 120 25 115 30 135Z" fill="#2b5134" />
      <path d="M30 215C50 190 65 210 55 180C45 200 35 195 30 215Z" fill="#2b5134" />
      <path d="M30 295C10 270 -5 290 5 260C15 280 25 275 30 295Z" fill="#2b5134" />
    </motion.svg>
  );
}

export function WaterDropsDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.08 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={`absolute pointer-events-none ${className}`}
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 80C40 80 20 40 40 10C60 40 40 80 40 80Z" fill="#2b5134" />
      <circle cx="40" cy="78" r="18" fill="#2b5134" />
      <path d="M90 100C90 100 75 70 90 45C105 70 90 100 90 100Z" fill="#2b5134" />
      <circle cx="90" cy="98" r="15" fill="#2b5134" />
      <path d="M130 70C130 70 118 45 130 25C142 45 130 70 130 70Z" fill="#2b5134" />
      <circle cx="130" cy="68" r="12" fill="#2b5134" />
      <path d="M60 160C60 160 50 135 60 120C70 135 60 160 60 160Z" fill="#2b5134" />
      <circle cx="60" cy="158" r="10" fill="#2b5134" />
      <path d="M110 150C110 150 102 130 110 118C118 130 110 150 110 150Z" fill="#2b5134" />
      <circle cx="110" cy="148" r="9" fill="#2b5134" />
    </motion.svg>
  );
}

export function LotusDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className={`absolute pointer-events-none ${className}`}
      width="200"
      height="160"
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 120C100 120 70 80 100 20C130 80 100 120 100 120Z" fill="#2b5134" />
      <path d="M100 120C100 120 50 90 30 40C70 60 100 120 100 120Z" fill="#2b5134" opacity="0.8" />
      <path d="M100 120C100 120 150 90 170 40C130 60 100 120 100 120Z" fill="#2b5134" opacity="0.8" />
      <path d="M100 120C100 120 30 100 10 60C50 70 100 120 100 120Z" fill="#2b5134" opacity="0.6" />
      <path d="M100 120C100 120 170 100 190 60C150 70 100 120 100 120Z" fill="#2b5134" opacity="0.6" />
      <ellipse cx="100" cy="140" rx="40" ry="8" fill="#2b5134" opacity="0.4" />
    </motion.svg>
  );
}
