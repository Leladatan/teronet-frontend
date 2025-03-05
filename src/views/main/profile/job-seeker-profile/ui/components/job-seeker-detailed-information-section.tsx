"use client";

import { motion, AnimatePresence } from "framer-motion";
import { invitations, jobSeeker } from "@/views/main/profile/job-seeker-profile/const";

import { Briefcase, Building, Calendar, CheckCircle, Clock, LinkIcon } from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";

import { useState } from "react";

const MotionCard = motion.create(Card);
const MotionBadge = motion.create(Badge);

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

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500 } },
};

const JobSeekerDetailedInformationSection = () => {
    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="w-full md:w-2/3">
            <Tabs defaultValue="portfolio" className="w-full" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                    <TabsTrigger value="availability">Доступность</TabsTrigger>
                    <TabsTrigger value="skills">Навыки</TabsTrigger>
                    <TabsTrigger value="invitations">Приглашения</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="sync">
                    <TabsContent value="availability" className="space-y-4">
                        <MotionCard variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                            <CardHeader>
                                <CardTitle>Готовность к получению предложений</CardTitle>
                                <CardDescription>Форматы работы, которые мне интересны</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {jobSeeker.availability.map((type, index) => (
                                        <motion.li
                                            key={`availability-${index}`}
                                            className="flex items-center gap-2"
                                            custom={index}
                                            variants={listItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                                            >
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                            </motion.div>
                                            <span>{type}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </MotionCard>
                    </TabsContent>

                    <TabsContent value="portfolio" className="space-y-4">
                        {jobSeeker.portfolio.map((project, index) => (
                            <MotionCard
                                key={`project-${index}`}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ delay: index * 0.1 }}
                            >
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle>{project.companyName}</CardTitle>
                                            <CardDescription>{project.clientType}</CardDescription>
                                        </div>
                                        <MotionBadge variants={badgeVariants} initial="hidden" animate="visible">
                                            {project.projectType}
                                        </MotionBadge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                        {project.description}
                                    </motion.p>

                                    {project.presentationLink && (
                                        <motion.div
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <LinkIcon className="h-4 w-4 text-primary" />
                                            <a
                                                href={project.presentationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Презентация проекта
                                            </a>
                                        </motion.div>
                                    )}

                                    {project.competition && (
                                        <motion.div
                                            className="mt-2 p-2 bg-secondary/20 rounded-md"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <p className="font-medium">Участие в конкурсе:</p>
                                            <p>{project.competition}</p>
                                        </motion.div>
                                    )}
                                </CardContent>
                            </MotionCard>
                        ))}
                    </TabsContent>

                    <TabsContent value="skills" className="space-y-4">
                        <MotionCard variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                            <CardHeader>
                                <CardTitle>Софт-скиллы</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {jobSeeker.softSkills.map((skill, index) => (
                                        <motion.div
                                            key={`soft-skill-${index}`}
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

                        <MotionCard
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: 0.2 }}
                        >
                            <CardHeader>
                                <CardTitle>Хард-скиллы</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {jobSeeker.hardSkills.map((skill, index) => (
                                        <MotionBadge
                                            key={`hard-skill-${index}`}
                                            variant="secondary"
                                            className="px-3 py-1"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: { delay: index * 0.05, type: "spring" },
                                            }}
                                        >
                                            {skill}
                                        </MotionBadge>
                                    ))}
                                </div>
                            </CardContent>
                        </MotionCard>
                    </TabsContent>

                    <TabsContent value="invitations" className="space-y-4">
                        <MotionCard variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                            <CardHeader>
                                <CardTitle>Приглашения к сотрудничеству</CardTitle>
                                <CardDescription>Работодатели, которым понравился ваш профиль</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {invitations.length > 0 ? (
                                    invitations.map((invitation, index) => (
                                        <MotionCard
                                            key={invitation.id}
                                            className="border border-muted"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: { delay: index * 0.1, duration: 0.4 },
                                            }}
                                        >
                                            <CardHeader className="pb-2">
                                                <div className="flex items-start gap-4">
                                                    <motion.div
                                                        className="h-10 w-10 rounded-md overflow-hidden bg-secondary flex items-center justify-center"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.2 }}
                                                    >
                                                        <Building className="h-6 w-6 text-muted-foreground" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <CardTitle className="text-lg">{invitation.companyName}</CardTitle>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                                            <CardDescription>{invitation.position}</CardDescription>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <Calendar className="h-3 w-3 mr-1" />
                                                        <span>{invitation.date}</span>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <motion.p
                                                    className="text-sm"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.1 + 0.3 }}
                                                >
                                                    {invitation.message}
                                                </motion.p>
                                            </CardContent>
                                            <CardFooter className="flex justify-end gap-2 pt-2">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.4 }}
                                                >
                                                    <Button variant="outline" size="sm">
                                                        Отклонить
                                                    </Button>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.5 }}
                                                >
                                                    <Button size="sm">Связаться</Button>
                                                </motion.div>
                                            </CardFooter>
                                        </MotionCard>
                                    ))
                                ) : (
                                    <motion.div
                                        className="text-center py-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <p className="text-muted-foreground">У вас пока нет приглашений к сотрудничеству</p>
                                    </motion.div>
                                )}
                            </CardContent>
                        </MotionCard>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>

            <motion.div
                className="flex justify-end mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

export default JobSeekerDetailedInformationSection;