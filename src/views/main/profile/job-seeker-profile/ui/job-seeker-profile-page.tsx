'use client';

import { motion } from 'framer-motion';

import JobSeekerBasicInfoSection from '@/views/main/profile/job-seeker-profile/ui/components/job-seeker-basic-info-section';
import JobSeekerDetailedInformationSection from '@/views/main/profile/job-seeker-profile/ui/components/detailed-information/job-seeker-detailed-information-section';

const JobSeekerProfilePage = () => {
  return (
    <motion.section
      className="container mx-auto py-6 px-4 max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left column - Avatar and basic info */}
        <JobSeekerBasicInfoSection />
        {/* Right column - Detailed information */}
        <JobSeekerDetailedInformationSection />
      </div>
    </motion.section>
  );
};

export default JobSeekerProfilePage;
