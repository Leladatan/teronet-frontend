import {motion} from "framer-motion";
import {jobSeeker} from "@/views/main/profile/job-seeker-profile/const";
import {jobSeekerCardVariants, jobSeekerListItemVariants} from "@/views/main/profile/job-seeker-profile/const/motion";

import {CheckCircle} from "lucide-react";
import {MotionCard} from "@/shared/const/motion";
import {CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const JobSeekerAvailabilitySection = () => {
    return (
        <MotionCard variants={jobSeekerCardVariants} initial="hidden" animate="visible" exit="exit">
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
                            variants={jobSeekerListItemVariants}
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
    );
};

export default JobSeekerAvailabilitySection;