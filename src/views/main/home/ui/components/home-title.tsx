"use client";

import { motion } from "framer-motion";
import {routes} from "@/shared/const/routes";

const HomeTitle = () => {
    return (
        <motion.div
            className="text-center space-y-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            <motion.h1
                className="text-4xl font-bold"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.6}}
            >
                Добро пожаловать в {routes.home.title}
            </motion.h1>
            <motion.p
                className="text-xl text-muted-foreground"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.6}}
            >
                Свяжитесь с работодателями и найдите свою возможность
            </motion.p>
        </motion.div>
    );
};

export default HomeTitle;