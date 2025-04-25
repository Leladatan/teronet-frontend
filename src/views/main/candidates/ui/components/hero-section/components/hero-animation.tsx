'use client';

import { motion } from 'framer-motion';

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M${5 * i},100 Q${5 * i + 2.5},${80 + (i % 2 ? 10 : 15)} ${5 * i + 5},100`}
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroAnimation;
