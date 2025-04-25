"use client";

import { motion } from "framer-motion";

import EmployerBasicInfoSection from "@/views/main/profile/employer-profile/ui/components/employer-basic-info-section";
import EmployerDetailedInformationSection from "@/views/main/profile/employer-profile/ui/components/detailed-information/employer-detailed-information-section";

const EmployerProfilePage = () => {
  return (
    <motion.section
      className="container mx-auto py-6 px-4 max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left column - Avatar and basic info */}
        <EmployerBasicInfoSection />
        {/* Right column - Detailed information */}
        <EmployerDetailedInformationSection />
      </div>
    </motion.section>
  );
};

export default EmployerProfilePage;
