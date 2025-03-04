"use client"

import { Card, CardContent } from "@/shared/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";

import JobSeekerProfileSection from "@/views/main/profile/job-seeker-profile/ui/settings/ui/sections/job-seeker-profile-section";
import JobSeekerPortfolioSection from "@/views/main/profile/job-seeker-profile/ui/settings/ui/sections/job-seeker-portfolio-section";
import JobSeekerSoftSkillsSection from "@/views/main/profile/job-seeker-profile/ui/settings/ui/sections/job-seeker-soft-skills-section";
import JobSeekerHardSkillsSection from "@/views/main/profile/job-seeker-profile/ui/settings/ui/sections/job-seeker-hard-skills-section";
import JobSeekerInvitationsSection from "@/views/main/profile/job-seeker-profile/ui/settings/ui/sections/job-seeker-invitations-section";

import { useState } from "react"

const JobSeekerProfileSettingsPage = () => {
    const [activeTab, setActiveTab] = useState<string>("profile");

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Профиль соискателя</h1>

            <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-5 mb-8">
                    <TabsTrigger value="profile">Профиль</TabsTrigger>
                    <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                    <TabsTrigger value="softskills">Софтскиллы</TabsTrigger>
                    <TabsTrigger value="hardskills">Хардскиллы</TabsTrigger>
                    <TabsTrigger value="invitations">Приглашения</TabsTrigger>
                </TabsList>

                <Card>
                    <CardContent className="pt-6">
                        <TabsContent value="profile">
                            <JobSeekerProfileSection />
                        </TabsContent>

                        <TabsContent value="portfolio">
                            <JobSeekerPortfolioSection />
                        </TabsContent>

                        <TabsContent value="softskills">
                            <JobSeekerSoftSkillsSection />
                        </TabsContent>

                        <TabsContent value="hardskills">
                            <JobSeekerHardSkillsSection />
                        </TabsContent>

                        <TabsContent value="invitations">
                            <JobSeekerInvitationsSection />
                        </TabsContent>
                    </CardContent>
                </Card>
            </Tabs>

            <div className="flex justify-end mt-6">
                <button
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => {
                        // Save profile logic would go here
                        alert("Профиль сохранен!")
                    }}
                >
                    Сохранить профиль
                </button>
            </div>
        </div>
    );
};

export default JobSeekerProfileSettingsPage;