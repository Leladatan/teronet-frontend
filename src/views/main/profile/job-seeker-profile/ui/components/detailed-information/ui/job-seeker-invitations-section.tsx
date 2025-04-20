import {motion} from "framer-motion";
import {invitations} from "@/views/main/profile/job-seeker-profile/const";
import {jobSeekerCardVariants} from "@/views/main/profile/job-seeker-profile/const/motion";

import {Briefcase, Building, Calendar} from "lucide-react";
import {Button} from "@/shared/components/ui/button";
import {MotionCard} from "@/shared/const/motion";
import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card";

const JobSeekerInvitationsSection = () => {
    return (
        <MotionCard variants={jobSeekerCardVariants} initial="hidden" animate="visible" exit="exit">
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
    );
};

export default JobSeekerInvitationsSection;