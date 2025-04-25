'use client';

import { motion } from 'framer-motion';
import { employer } from '@/views/main/profile/employer-profile/const';

import { Building2, Clock } from 'lucide-react';

import { Badge } from '@/shared/components/ui/badge';
import { MotionAvatar, MotionCard } from '@/shared/const/motion';
import { AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

const EmployerBasicInfoSection = () => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <MotionAvatar
        className="w-32 h-32 border-4 border-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AvatarImage src="/placeholder.svg?height=128&width=128" alt={employer.legalName} />
        <AvatarFallback className="text-3xl bg-primary/10">
          {employer.brandNames[0].substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </MotionAvatar>

      <MotionCard
        className="w-full mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <CardHeader>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <CardTitle className="text-xl text-center">{employer.brandNames[0]}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <CardDescription className="text-center">{employer.companyType}</CardDescription>
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
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{employer.legalName}</span>
            </motion.div>

            {employer.brandNames.length > 1 && (
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {employer.brandNames.map((brand, index) => (
                  <Badge key={index} variant="outline">
                    {brand}
                  </Badge>
                ))}
              </motion.div>
            )}
          </div>
        </CardContent>

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
      </MotionCard>
    </div>
  );
};

export default EmployerBasicInfoSection;
