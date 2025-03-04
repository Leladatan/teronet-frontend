import {jobSeeker} from "@/views/main/profile/job-seeker-profile/const";

import {Calendar, GraduationCap} from "lucide-react";

import {Avatar, AvatarFallback, AvatarImage} from "@/shared/components/ui/avatar";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const JobSeekerBasicInfoSection = () => {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center">
            <Avatar className="w-32 h-32 border-4 border-primary/10">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt={jobSeeker.fullName}/>
                <AvatarFallback className="text-3xl bg-primary/10">
                    {jobSeeker.fullName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>

            <Card className="w-full mt-4">
                <CardHeader>
                    <CardTitle className="text-xl text-center">{jobSeeker.fullName}</CardTitle>
                    <CardDescription className="text-center">{jobSeeker.studyProgram}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-muted-foreground"/>
                            <span className="text-sm">{jobSeeker.university}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground"/>
                            <span className="text-sm">Год окончания: {jobSeeker.graduationYear}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default JobSeekerBasicInfoSection;