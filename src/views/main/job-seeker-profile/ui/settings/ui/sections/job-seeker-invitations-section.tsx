"use client";

import { Check, Building, MapPin, Clock } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";

import { useState } from "react";

// Mock data for demonstration
const mockInvitations = [
    {
        id: "1",
        companyName: "DigitalWave",
        position: "Маркетолог",
        location: "Москва",
        type: "Полная занятость",
        description:
            "Мы ищем талантливого маркетолога для работы над нашими диджитал-кампаниями. Ваш опыт и креативность будут высоко оценены в нашей команде.",
        date: "2023-03-01",
        status: "new",
    },
    {
        id: "2",
        companyName: "CreativeMinds",
        position: "PR-менеджер",
        location: "Санкт-Петербург",
        type: "Удаленная работа",
        description:
            "Присоединяйтесь к нашей команде для работы над интересными PR-проектами. Мы предлагаем гибкий график и возможность удаленной работы.",
        date: "2023-02-25",
        status: "viewed",
    },
    {
        id: "3",
        companyName: "MarketPro",
        position: "Бренд-менеджер",
        location: "Казань",
        type: "Проектная работа",
        description:
            "Требуется опытный бренд-менеджер для работы над ребрендингом компании. Проект рассчитан на 3 месяца с возможностью продления.",
        date: "2023-02-20",
        status: "responded",
    },
];

const JobSeekerInvitationsSection = () => {
    const [invitations, setInvitations] = useState(mockInvitations);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "new":
                return <Badge className="bg-blue-500">Новое</Badge>;
            case "viewed":
                return (
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        Просмотрено
                    </Badge>
                );
            case "responded":
                return (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                        Отвечено
                    </Badge>
                );
            default:
                return null;
        }
    };

    const markAsViewed = (id: string) => {
        setInvitations(invitations.map((inv) => (inv.id === id ? { ...inv, status: "viewed" } : inv)));
    };

    const respondToInvitation = (id: string) => {
        setInvitations(invitations.map((inv) => (inv.id === id ? { ...inv, status: "responded" } : inv)));
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Приглашения к сотрудничеству</h2>

            {invitations.length > 0 ? (
                <div className="grid gap-4">
                    {invitations.map((invitation) => (
                        <Card key={invitation.id} className={invitation.status === "new" ? "border-blue-500" : ""}>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle>{invitation.position}</CardTitle>
                                        <CardDescription className="flex items-center mt-1">
                                            <Building className="h-4 w-4 mr-1" />
                                            {invitation.companyName}
                                        </CardDescription>
                                    </div>
                                    {getStatusBadge(invitation.status)}
                                </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                                <div className="grid gap-2">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {invitation.location}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {invitation.type}
                                    </div>
                                    <p className="mt-2">{invitation.description}</p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-2">
                                <div className="text-xs text-muted-foreground">
                                    Получено: {new Date(invitation.date).toLocaleDateString()}
                                </div>
                                <div className="flex gap-2">
                                    {invitation.status === "new" && (
                                        <Button variant="outline" size="sm" onClick={() => markAsViewed(invitation.id)}>
                                            Просмотрено
                                        </Button>
                                    )}
                                    {(invitation.status === "new" || invitation.status === "viewed") && (
                                        <Button size="sm" onClick={() => respondToInvitation(invitation.id)}>
                                            <Check className="h-4 w-4 mr-1" />
                                            Ответить
                                        </Button>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">У вас пока нет приглашений к сотрудничеству</p>
                </div>
            )}
        </div>
    );
};

export default JobSeekerInvitationsSection;