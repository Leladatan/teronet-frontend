"use client";

import { AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";

import JobSeekerPortfolioSection from "@/views/main/profile/job-seeker-profile/ui/components/detailed-information/ui/job-seeker-portfolio-section";
import JobSeekerAvailabilitySection from "@/views/main/profile/job-seeker-profile/ui/components/detailed-information/ui/job-seeker-availability-section";
import JobSeekerSkillsSection from "@/views/main/profile/job-seeker-profile/ui/components/detailed-information/ui/job-seeker-skills-section";
import JobSeekerInvitationsSection from "@/views/main/profile/job-seeker-profile/ui/components/detailed-information/ui/job-seeker-invitations-section";

import { useState } from "react";

const JobSeekerDetailedInformationSection = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="w-full md:w-2/3">
      <Tabs
        defaultValue="portfolio"
        className="w-full"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
          <TabsTrigger value="availability">Доступность</TabsTrigger>
          <TabsTrigger value="skills">Навыки</TabsTrigger>
          <TabsTrigger value="invitations">Приглашения</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="sync">
          <TabsContent value="availability" className="space-y-4">
            <JobSeekerAvailabilitySection />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-4">
            <JobSeekerPortfolioSection />
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <JobSeekerSkillsSection />
          </TabsContent>

          <TabsContent value="invitations" className="space-y-4">
            <JobSeekerInvitationsSection />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default JobSeekerDetailedInformationSection;
