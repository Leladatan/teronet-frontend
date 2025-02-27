"use client";

import { motion } from "framer-motion";

import {Card} from "@/shared/components/ui/card";
import {Badge} from "@/shared/components/ui/badge";

type UserCard = {
    type: "seeker" | "employer"
    name: string
    tags: string[]
    company?: string
    field?: string
};

const demoCards: UserCard[] = [
    {
        type: "seeker",
        name: "Алекс К.",
        tags: ["Дизайн UI/UX", "Дизайн Продукта", "Figma"],
    },
    {
        type: "employer",
        name: "Технологические Решения",
        company: "Технологические Решения Инк",
        field: "Разработка Программного Обеспечения",
        tags: ["ИТ", "Программное Обеспечение"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.6,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeUserCards = () => {
    return (
        <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {demoCards.map((card, i) => (
                <motion.div key={i} variants={item} className="h-full">
                    <motion.div
                        className="h-full"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                    >
                        <Card className="p-6 h-full flex flex-col">
                            <div className="mb-4 flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold">{card.name}</h3>
                                    {card.company && <p className="text-sm text-muted-foreground">{card.field}</p>}
                                </div>
                                <Badge variant={card.type === "seeker" ? "secondary" : "outline"}>
                                    {card.type === "seeker" ? "Соискатель Работы" : "Работодатель"}
                                </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {card.tags.map((tag) => (
                                    <motion.div
                                        key={tag}
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{delay: 0.8 + i * 0.1}}
                                    >
                                        <Badge variant="secondary">{tag}</Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default HomeUserCards;