"use client";

import {jobSeeker} from "@/views/main/profile/job-seeker-profile/const";

import {CheckCircle, Clock, LinkIcon} from "lucide-react";

import {Badge} from "@/shared/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const JobSeekerDetailedInformationSection = () => {
    return (
        <div className="w-full md:w-2/3">
            <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                    <TabsTrigger value="availability">Доступность</TabsTrigger>
                    <TabsTrigger value="skills">Навыки</TabsTrigger>
                </TabsList>

                <TabsContent value="availability" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Готовность к получению предложений</CardTitle>
                            <CardDescription>Форматы работы, которые мне интересны</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {jobSeeker.availability.map((type, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary"/>
                                        <span>{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="portfolio" className="space-y-4">
                    {jobSeeker.portfolio.map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{project.companyName}</CardTitle>
                                        <CardDescription>{project.clientType}</CardDescription>
                                    </div>
                                    <Badge>{project.projectType}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p>{project.description}</p>

                                {project.presentationLink && (
                                    <div className="flex items-center gap-2">
                                        <LinkIcon className="h-4 w-4 text-primary"/>
                                        <a
                                            href={project.presentationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            Презентация проекта
                                        </a>
                                    </div>
                                )}

                                {project.competition && (
                                    <div className="mt-2 p-2 bg-secondary/20 rounded-md">
                                        <p className="font-medium">Участие в конкурсе:</p>
                                        <p>{project.competition}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Софт-скиллы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {jobSeeker.softSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/20">
                                        <CheckCircle className="h-5 w-5 text-primary"/>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Хард-скиллы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {jobSeeker.hardSkills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="px-3 py-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end mt-6">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1"/>
                    <span>Профиль обновлен: 04.03.2025</span>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerDetailedInformationSection;