"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"

import CompanyProfile from "@/views/main/employer-profile/ui/settings/ui/components/company-profile";
import CandidatesList from "@/views/main/employer-profile/ui/settings/ui/components/candidates-list";

const EmployerProfileSettingsPage = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Профиль работодателя</h1>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="profile">Профиль компании</TabsTrigger>
                    <TabsTrigger value="candidates">Соискатели</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <CompanyProfile/>
                </TabsContent>
                <TabsContent value="candidates">
                    <CandidatesList/>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default EmployerProfileSettingsPage;