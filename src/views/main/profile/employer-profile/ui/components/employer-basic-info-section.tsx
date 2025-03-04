"use client";

import {employer} from "@/views/main/profile/employer-profile/const";

import {Building2} from "lucide-react";

import {Badge} from "@/shared/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/components/ui/avatar";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const EmployerBasicInfoSection = () => {
    return (
        <div className="w-full md:w-1/3 flex flex-col items-center">
            <Avatar className="w-32 h-32 border-4 border-primary/10">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt={employer.legalName}/>
                <AvatarFallback className="text-3xl bg-primary/10">
                    {employer.brandNames[0].substring(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>

            <Card className="w-full mt-4">
                <CardHeader>
                    <CardTitle className="text-xl text-center">{employer.brandNames[0]}</CardTitle>
                    <CardDescription className="text-center">{employer.companyType}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-muted-foreground"/>
                            <span className="text-sm">{employer.legalName}</span>
                        </div>
                        {employer.brandNames.length > 1 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {employer.brandNames.map((brand, index) => (
                                    <Badge key={index} variant="outline">
                                        {brand}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EmployerBasicInfoSection;