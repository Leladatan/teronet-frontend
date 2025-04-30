"use client";

import { motion } from "framer-motion";
import { routes } from "@/shared/const/routes";

import Link from "next/link";
import { Switch } from "@/shared/components/ui/switch";

import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Link
      href={routes.home.href}
      className="flex items-center gap-3 no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Switch
          checked={true}
          onCheckedChange={() => {}}
          className="hidden md:block data-[state=checked]:bg-[#39A9F4] data-[state=checked]:border-[#39A9F4]"
        />

        <motion.h1
          className="flex items-center m-0 leading-none font-bold text-xl md:text-2xl"
          animate={{
            textShadow: isClicked ? "0 0 8px rgba(41,128,185,0.5)" : "none",
          }}
        >
          <motion.span
            className="text-[#39A9F4]"
            animate={{
              color: isHovered ? "#2980b9" : "#39A9F4",
              y: isHovered ? -2 : 0,
            }}
          >
            BUSINESS
          </motion.span>
          <motion.span className="text-foreground ml-2" animate={{ y: isHovered ? 2 : 0 }}>
            PRACTICE
          </motion.span>
        </motion.h1>
      </motion.div>
    </Link>
  );
};

export default Logo;
