import { motion } from 'framer-motion';
import {
  employerCardVariants,
  employerListItemVariants,
} from '@/views/main/profile/employer-profile/const/motion';
import { employer } from '@/views/main/profile/employer-profile/const';

import { CheckCircle } from 'lucide-react';
import { MotionCard } from '@/shared/const/motion';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

const EmployerSkillsSection = () => {
  return (
    <MotionCard variants={employerCardVariants} initial="hidden" animate="visible" exit="exit">
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
              variants={employerListItemVariants}
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
  );
};

export default EmployerSkillsSection;
