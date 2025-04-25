import { motion } from 'framer-motion';
import {
  employerCardVariants,
  employerListItemVariants,
} from '@/views/main/profile/employer-profile/const/motion';
import { employer } from '@/views/main/profile/employer-profile/const';

import { CheckCircle } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { MotionCard } from '@/shared/const/motion';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

const EmployerRequirementsSection = () => {
  return (
    <>
      <MotionCard variants={employerCardVariants} initial="hidden" animate="visible" exit="exit">
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
                variants={employerListItemVariants}
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
        variants={employerCardVariants}
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
                transition={{ delay: index * 0.05, type: 'spring' }}
              >
                <Badge variant="secondary" className="px-3 py-1">
                  {type}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </MotionCard>
    </>
  );
};

export default EmployerRequirementsSection;
