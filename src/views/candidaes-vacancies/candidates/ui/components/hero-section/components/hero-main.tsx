"use client";

import { motion } from "framer-motion";

const HeroMain = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Найдите идеальных кандидатов для вашего проекта
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Наша платформа объединяет талантливых профессионалов из разных областей, готовых
            присоединиться к вашей команде и помочь в достижении целей.
          </p>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:w-1/2 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-80"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-80"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-pink-500 rounded-full opacity-80"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMain;
