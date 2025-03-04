import EmployerBasicInfoSection from "@/views/main/profile/employer-profile/ui/components/employer-basic-info-section";
import EmployerDetailedInformationSection
    from "@/views/main/profile/employer-profile/ui/components/employer-detailed-information-section";

const EmployerProfilePage = () => {
    return (
        <section className="container mx-auto py-6 px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left column - Avatar and basic info */}
                <EmployerBasicInfoSection/>

                {/* Right column - Detailed information */}
                <EmployerDetailedInformationSection/>
            </div>
        </section>
    );
};

export default EmployerProfilePage;