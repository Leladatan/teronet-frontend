import JobSeekerBasicInfoSection
    from "@/views/main/profile/job-seeker-profile/ui/components/job-seeker-basic-info-section";
import JobSeekerDetailedInformationSection
    from "@/views/main/profile/job-seeker-profile/ui/components/job-seeker-detailed-information-section";

const JobSeekerProfilePage = () => {
    return (
        <section className="container mx-auto py-6 px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left column - Avatar and basic info */}
                <JobSeekerBasicInfoSection/>
                {/* Right column - Detailed information */}
                <JobSeekerDetailedInformationSection/>
            </div>
        </section>
    );
};

export default JobSeekerProfilePage;