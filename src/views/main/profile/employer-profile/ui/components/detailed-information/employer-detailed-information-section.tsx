"use client";

import { AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";

import EmployerOverviewSection from "@/views/main/profile/employer-profile/ui/components/detailed-information/ui/employer-overview-section";
import EmployerRequirementsSection from "@/views/main/profile/employer-profile/ui/components/detailed-information/ui/employer-requirements-section";
import EmployerSkillsSection from "@/views/main/profile/employer-profile/ui/components/detailed-information/ui/employer-skills-section";

const EmployerDetailedInformationSection = () => {
  return (
    <div className="w-full md:w-2/3">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="requirements">Требования</TabsTrigger>
          <TabsTrigger value="skills">Навыки</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="sync">
          <TabsContent value="overview" className="space-y-4">
            <EmployerOverviewSection />
          </TabsContent>

          <TabsContent value="requirements" className="space-y-4">
            <EmployerRequirementsSection />
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <EmployerSkillsSection />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default EmployerDetailedInformationSection;
