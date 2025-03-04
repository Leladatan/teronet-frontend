"use client";

import { Check, Mail, UserPlus } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

import { useState } from "react";

// Моковые данные для соискателей
const mockCandidates = [
    {
        id: 1,
        name: "Анна Смирнова",
        position: "Маркетолог",
        skills: ["Брендинг", "Диджитал-маркетинг", "SMM"],
        softSkills: ["Инновационность", "Мотивированность", "Ориентация на результат"],
        experience: "5 лет",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "interested", // interested, invited, hired
    },
    {
        id: 2,
        name: "Иван Петров",
        position: "Графический дизайнер",
        skills: ["UI/UX", "Adobe Creative Suite", "Брендинг"],
        softSkills: ["Креативность", "Самостоятельность", "Ответственность"],
        experience: "3 года",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "interested",
    },
    {
        id: 3,
        name: "Мария Иванова",
        position: "PR-менеджер",
        skills: ["Медиа-релейшнз", "Копирайтинг", "Организация мероприятий"],
        softSkills: ["Коммуникабельность", "Стрессоустойчивость", "Налаживание контактов"],
        experience: "7 лет",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "invited",
    },
    {
        id: 4,
        name: "Алексей Сидоров",
        position: "Контент-менеджер",
        skills: ["Копирайтинг", "SEO", "Социальные сети"],
        softSkills: ["Анализ информации", "Планирование", "Сотрудничество"],
        experience: "2 года",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "interested",
    },
    {
        id: 5,
        name: "Екатерина Новикова",
        position: "Бренд-менеджер",
        skills: ["Стратегический маркетинг", "Управление брендом", "Аналитика"],
        softSkills: ["Лидерство", "Принятие решений", "Влияние"],
        experience: "6 лет",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "hired",
    },
]

const CandidatesList = () => {
    const [candidates, setCandidates] = useState(mockCandidates);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filter, setFilter] = useState<string>("all");

    const handleInvite = (id: number) => {
        setCandidates(
            candidates.map((candidate) => (candidate.id === id ? { ...candidate, status: "invited" } : candidate)),
        );
    };

    const filteredCandidates = candidates.filter((candidate) => {
        const matchesSearch =
            candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

        if (filter === "all") return matchesSearch;
        if (filter === "interested") return matchesSearch && candidate.status === "interested";
        if (filter === "invited") return matchesSearch && candidate.status === "invited";
        if (filter === "hired") return matchesSearch && candidate.status === "hired";

        return matchesSearch;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="w-full md:w-1/2">
                    <Label htmlFor="search" className="sr-only">
                        Поиск
                    </Label>
                    <Input
                        id="search"
                        placeholder="Поиск по имени, должности или навыкам"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/4">
                    <Label htmlFor="filter" className="sr-only">
                        Фильтр
                    </Label>
                    <Select value={filter} onValueChange={setFilter}>
                        <SelectTrigger id="filter">
                            <SelectValue placeholder="Фильтр по статусу" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Все соискатели</SelectItem>
                            <SelectItem value="interested">Заинтересованные</SelectItem>
                            <SelectItem value="invited">Приглашенные</SelectItem>
                            <SelectItem value="hired">Нанятые</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCandidates.map((candidate) => (
                    <Card key={candidate.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={candidate.avatar} alt={candidate.name} />
                                        <AvatarFallback>{candidate.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-lg">{candidate.name}</CardTitle>
                                        <CardDescription>{candidate.position}</CardDescription>
                                    </div>
                                </div>
                                {candidate.status === "interested" && (
                                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                        Заинтересован
                                    </Badge>
                                )}
                                {candidate.status === "invited" && (
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        Приглашен
                                    </Badge>
                                )}
                                {candidate.status === "hired" && (
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                        Нанят
                                    </Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                            <div className="text-sm text-muted-foreground mb-2">Опыт работы: {candidate.experience}</div>
                            <div className="mb-3">
                                <div className="text-sm font-medium mb-1">Навыки:</div>
                                <div className="flex flex-wrap gap-1">
                                    {candidate.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-medium mb-1">Софт-скиллы:</div>
                                <div className="flex flex-wrap gap-1">
                                    {candidate.softSkills.map((skill, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                            {candidate.status === "interested" ? (
                                <Button className="w-full" onClick={() => handleInvite(candidate.id)}>
                                    <UserPlus className="mr-2 h-4 w-4" /> Пригласить
                                </Button>
                            ) : candidate.status === "invited" ? (
                                <Button variant="outline" className="w-full">
                                    <Mail className="mr-2 h-4 w-4" /> Отправить сообщение
                                </Button>
                            ) : (
                                <Button variant="outline" className="w-full" disabled>
                                    <Check className="mr-2 h-4 w-4" /> Нанят
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredCandidates.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">Соискатели не найдены</p>
                </div>
            )}
        </div>
    );
};

export default CandidatesList;