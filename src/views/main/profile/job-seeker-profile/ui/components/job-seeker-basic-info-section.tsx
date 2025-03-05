"use client";

import { motion } from "framer-motion";
import { jobSeeker } from "@/views/main/profile/job-seeker-profile/const";

import { Calendar, GraduationCap } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

const MotionCard = motion.create(Card);
const MotionAvatar = motion.create(Avatar);

const JobSeekerBasicInfoSection = () => {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center">
            <MotionAvatar
                className="w-32 h-32 border-4 border-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt={jobSeeker.fullName} />
                <AvatarFallback className="text-3xl bg-primary/10">
                    {jobSeeker.fullName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
            </MotionAvatar>

            <MotionCard
                className="w-full mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <CardHeader>
                    <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <CardTitle className="text-xl text-center">{jobSeeker.fullName}</CardTitle>
                    </motion.div>
                    <motion.div initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <CardDescription className="text-center">{jobSeeker.studyProgram}</CardDescription>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{jobSeeker.university}</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Год окончания: {jobSeeker.graduationYear}</span>
                        </motion.div>
                    </div>
                </CardContent>
            </MotionCard>
        </div>
    );
};

export default JobSeekerBasicInfoSection;