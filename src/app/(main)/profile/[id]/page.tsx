"use client";

import JobSeekerProfilePage from "@/views/main/profile/job-seeker-profile";
import EmployerProfilePage from "@/views/main/profile/employer-profile";

import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  if (Number(id) === 1) {
    return <JobSeekerProfilePage />;
  }

  if (Number(id) === 2) {
    return <EmployerProfilePage />;
  }
};

export default Page;
