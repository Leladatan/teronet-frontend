import {motion} from "framer-motion";
import {jobSeeker} from "@/views/main/profile/job-seeker-profile/const";
import {jobSeekerBadgeVariants, jobSeekerCardVariants} from "@/views/main/profile/job-seeker-profile/const/motion";

import {LinkIcon} from "lucide-react";
import {MotionBadge, MotionCard} from "@/shared/const/motion";
import {CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const JobSeekerPortfolioSection = () => {
    return (
        <>
            {jobSeeker.portfolio.map((project, index) => (
                <MotionCard
                    key={`project-${index}`}
                    variants={jobSeekerCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{delay: index * 0.1}}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>{project.companyName}</CardTitle>
                                <CardDescription>{project.clientType}</CardDescription>
                            </div>
                            <MotionBadge variants={jobSeekerBadgeVariants} initial="hidden" animate="visible">
                                {project.projectType}
                            </MotionBadge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
                            {project.description}
                        </motion.p>

                        {project.presentationLink && (
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.3}}
                            >
                                <LinkIcon className="h-4 w-4 text-primary"/>
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
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{delay: 0.4}}
                            >
                                <p className="font-medium">Участие в конкурсе:</p>
                                <p>{project.competition}</p>
                            </motion.div>
                        )}
                    </CardContent>
                </MotionCard>
            ))}
        </>
    );
};

export default JobSeekerPortfolioSection;