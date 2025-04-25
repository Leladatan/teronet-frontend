import { motion } from "framer-motion";
import { jobSeeker } from "@/views/main/profile/job-seeker-profile/const";
import {
  jobSeekerCardVariants,
  jobSeekerListItemVariants,
} from "@/views/main/profile/job-seeker-profile/const/motion";

import { CheckCircle } from "lucide-react";
import { MotionBadge, MotionCard } from "@/shared/const/motion";
import { CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";

const JobSeekerSkillsSection = () => {
  return (
    <>
      <MotionCard variants={jobSeekerCardVariants} initial="hidden" animate="visible" exit="exit">
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
                variants={jobSeekerListItemVariants}
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
        variants={jobSeekerCardVariants}
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
    </>
  );
};

export default JobSeekerSkillsSection;
