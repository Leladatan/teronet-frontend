"use client";

import { motion, AnimatePresence } from "framer-motion";
import { employer } from "@/views/main/profile/employer-profile/const";

import { CheckCircle, Clock } from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

const MotionCard = motion(Card);

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};

const EmployerDetailedInformationSection = () => {
    return (
        <div className="w-full md:w-2/3">
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="requirements">Требования</TabsTrigger>
                    <TabsTrigger value="skills">Навыки</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="sync">
                    <TabsContent value="overview" className="space-y-4">
                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <CardHeader>
                                <CardTitle>О компании</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {employer.description}
                                </motion.p>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: 0.2 }}
                        >
                            <CardHeader>
                                <CardTitle>Бренды</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {employer.brandNames.map((brand, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05, type: "spring" }}
                                        >
                                            <Badge className="px-3 py-1">{brand}</Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </MotionCard>
                    </TabsContent>

                    <TabsContent value="requirements" className="space-y-4">
                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <CardHeader>
                                <CardTitle>Формат работы</CardTitle>
                                <CardDescription>Мы ищем сотрудников на следующие форматы работы</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {employer.seekingFor.map((type, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-2"
                                            custom={index}
                                            variants={listItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>{type}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: 0.2 }}
                        >
                            <CardHeader>
                                <CardTitle>Типы проектов</CardTitle>
                                <CardDescription>Специализации, которые нам интересны</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {employer.projectTypes.map((type, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05, type: "spring" }}
                                        >
                                            <Badge variant="secondary" className="px-3 py-1">
                                                {type}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </MotionCard>
                    </TabsContent>

                    <TabsContent value="skills" className="space-y-4">
                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <CardHeader>
                                <CardTitle>Приоритетные софт-скиллы</CardTitle>
                                <CardDescription>Навыки, которые мы ценим в кандидатах</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {employer.softSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-2 p-2 rounded-md bg-secondary/20"
                                            custom={index}
                                            variants={listItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </MotionCard>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>

            <motion.div
                className="flex justify-end mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Профиль обновлен: 04.03.2025</span>
                </div>
            </motion.div>
        </div>
    );
};

export default EmployerDetailedInformationSection;
