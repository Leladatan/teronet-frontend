"use client";

import JobSeekerProfileSettingsPage from "@/views/main/profile/job-seeker-profile/ui/settings";
import EmployerProfileSettingsPage from "@/views/main/profile/employer-profile/ui/settings";

import {useParams} from "next/navigation";

const Page = () => {
    const { id } = useParams();

    if (Number(id) === 1) {
        return <JobSeekerProfileSettingsPage/>;
    }

    if (Number(id) === 2) {
        return <EmployerProfileSettingsPage/>;
    }
};

export default Page;