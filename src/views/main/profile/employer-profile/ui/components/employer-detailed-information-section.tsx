import {employer} from "@/views/main/profile/employer-profile/const";

import {CheckCircle, Clock} from "lucide-react";

import {Badge} from "@/shared/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";

const EmployerDetailedInformationSection = () => {
    return (
        <div className="w-full md:w-2/3">
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="requirements">Требования</TabsTrigger>
                    <TabsTrigger value="skills">Навыки</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>О компании</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{employer.description}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Бренды</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {employer.brandNames.map((brand, index) => (
                                    <Badge key={index} className="px-3 py-1">
                                        {brand}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Формат работы</CardTitle>
                            <CardDescription>Мы ищем сотрудников на следующие форматы работы</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {employer.seekingFor.map((type, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary"/>
                                        <span>{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Типы проектов</CardTitle>
                            <CardDescription>Специализации, которые нам интересны</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {employer.projectTypes.map((type, index) => (
                                    <Badge key={index} variant="secondary" className="px-3 py-1">
                                        {type}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Приоритетные софт-скиллы</CardTitle>
                            <CardDescription>Навыки, которые мы ценим в кандидатах</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {employer.softSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/20">
                                        <CheckCircle className="h-5 w-5 text-primary"/>
                                        <span>{skill}</span>
                                    </div>
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

export default EmployerDetailedInformationSection;