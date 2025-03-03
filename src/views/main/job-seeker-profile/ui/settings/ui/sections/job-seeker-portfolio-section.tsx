"use client"

import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/shared/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { Badge } from "@/shared/components/ui/badge";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

import { useState } from "react";

interface Project {
    id: string;
    companyTypes: string[];
    companyName: string;
    projectTypes: string[];
    description: string;
    link: string;
    competition: string;
};

const JobSeekerPortfolioSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState<Project>({
        id: "",
        companyTypes: [],
        companyName: "",
        projectTypes: [],
        description: "",
        link: "",
        competition: "",
    });
    const [companyTypeOpen, setCompanyTypeOpen] = useState<boolean>(false);
    const [projectTypeOpen, setProjectTypeOpen] = useState<boolean>(false);

    const companyTypes = [
        "B2B",
        "B2C",
        "Международная",
        "Федеральная",
        "Местная",
        "Крупный бизнес",
        "Малый бизнес",
        "Средний бизнес",
        "FMCG",
        "IT, телекоммуникации",
        "Ритейл",
        "Финансы",
        "Медицина",
        "Бьюти индустрия",
        "Образование",
        "Туризм",
        "Логистика",
        "Легкая промышленность",
        "Сельское хозяйство",
        "Строительство, недвижимость",
        "Автобизнес",
        "Реклама/маркетинг/PR",
        "Общественное питание",
        "Искусство, развлечения",
        "Спорт",
        "Услуги",
    ];

    const projectTypes = [
        "Диджитал-кампания",
        "Маркетинговая стратегия",
        "Брендинг",
        "Креативная концепция продвижения",
        "Дизайн рекламной продукции",
        "PR-кампания",
        "Другое",
    ];

    const addProject = () => {
        if (currentProject.companyName.trim() === "") {
            alert("Пожалуйста, укажите название компании");
            return;
        }

        const newProject = {
            ...currentProject,
            id: Date.now().toString(),
        };

        setProjects([...projects, newProject]);
        setCurrentProject({
            id: "",
            companyTypes: [],
            companyName: "",
            projectTypes: [],
            description: "",
            link: "",
            competition: "",
        });
    };

    const removeProject = (id: string) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    const toggleCompanyType = (type: string) => {
        if (currentProject.companyTypes.includes(type)) {
            setCurrentProject({
                ...currentProject,
                companyTypes: currentProject.companyTypes.filter((t) => t !== type),
            });
        } else {
            setCurrentProject({
                ...currentProject,
                companyTypes: [...currentProject.companyTypes, type],
            });
        }
    };

    const toggleProjectType = (type: string) => {
        if (currentProject.projectTypes.includes(type)) {
            setCurrentProject({
                ...currentProject,
                projectTypes: currentProject.projectTypes.filter((t) => t !== type),
            });
        } else {
            setCurrentProject({
                ...currentProject,
                projectTypes: [...currentProject.projectTypes, type],
            });
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Портфолио</h2>

            <div className="space-y-6">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>Тип компании-заказчика</Label>
                        <Popover open={companyTypeOpen} onOpenChange={setCompanyTypeOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={companyTypeOpen} className="justify-between">
                                    {currentProject.companyTypes.length > 0
                                        ? `Выбрано: ${currentProject.companyTypes.length}`
                                        : "Выберите типы компаний"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[400px] p-0">
                                <Command>
                                    <CommandInput placeholder="Поиск типа компании..." />
                                    <CommandList>
                                        <CommandEmpty>Ничего не найдено.</CommandEmpty>
                                        <CommandGroup>
                                            <ScrollArea className="h-[300px]">
                                                {companyTypes.map((type) => (
                                                    <CommandItem key={type} value={type} onSelect={() => toggleCompanyType(type)}>
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                                                                    currentProject.companyTypes.includes(type)
                                                                        ? "bg-primary border-primary"
                                                                        : "border-input"
                                                                }`}
                                                            >
                                                                {currentProject.companyTypes.includes(type) && (
                                                                    <span className="text-xs text-primary-foreground">✓</span>
                                                                )}
                                                            </div>
                                                            <span>{type}</span>
                                                        </div>
                                                    </CommandItem>
                                                ))}
                                            </ScrollArea>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        {currentProject.companyTypes.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {currentProject.companyTypes.map((type) => (
                                    <Badge key={type} variant="secondary" className="px-2 py-1">
                                        {type}
                                        <button className="ml-2 text-xs" onClick={() => toggleCompanyType(type)}>
                                            ✕
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="companyName">Название компании</Label>
                        <Input
                            id="companyName"
                            value={currentProject.companyName}
                            onChange={(e) => setCurrentProject({ ...currentProject, companyName: e.target.value })}
                            placeholder="Введите название компании"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Тип проекта</Label>
                        <Popover open={projectTypeOpen} onOpenChange={setProjectTypeOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={projectTypeOpen} className="justify-between">
                                    {currentProject.projectTypes.length > 0
                                        ? `Выбрано: ${currentProject.projectTypes.length}`
                                        : "Выберите типы проектов"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[400px] p-0">
                                <Command>
                                    <CommandInput placeholder="Поиск типа проекта..." />
                                    <CommandList>
                                        <CommandEmpty>Ничего не найдено.</CommandEmpty>
                                        <CommandGroup>
                                            <ScrollArea className="h-[200px]">
                                                {projectTypes.map((type) => (
                                                    <CommandItem key={type} value={type} onSelect={() => toggleProjectType(type)}>
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                                                                    currentProject.projectTypes.includes(type)
                                                                        ? "bg-primary border-primary"
                                                                        : "border-input"
                                                                }`}
                                                            >
                                                                {currentProject.projectTypes.includes(type) && (
                                                                    <span className="text-xs text-primary-foreground">✓</span>
                                                                )}
                                                            </div>
                                                            <span>{type}</span>
                                                        </div>
                                                    </CommandItem>
                                                ))}
                                            </ScrollArea>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        {currentProject.projectTypes.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {currentProject.projectTypes.map((type) => (
                                    <Badge key={type} variant="secondary" className="px-2 py-1">
                                        {type}
                                        <button className="ml-2 text-xs" onClick={() => toggleProjectType(type)}>
                                            ✕
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {currentProject.projectTypes.includes("Другое") && (
                            <Input
                                value={currentProject.projectTypes.find((t) => !projectTypes.includes(t)) || ""}
                                onChange={(e) => {
                                    const otherTypes = currentProject.projectTypes.filter(
                                        (t) => t !== "Другое" && !projectTypes.includes(t),
                                    )
                                    if (e.target.value) {
                                        setCurrentProject({
                                            ...currentProject,
                                            projectTypes: [
                                                ...currentProject.projectTypes.filter((t) => t === "Другое" || projectTypes.includes(t)),
                                                e.target.value,
                                            ],
                                        })
                                    } else {
                                        setCurrentProject({
                                            ...currentProject,
                                            projectTypes: currentProject.projectTypes.filter(
                                                (t) => t === "Другое" || projectTypes.includes(t),
                                            ),
                                        })
                                    }
                                }}
                                placeholder="Укажите свой вариант"
                                className="mt-2"
                            />
                        )}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Краткое описание проекта</Label>
                        <Textarea
                            id="description"
                            value={currentProject.description}
                            onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                            placeholder="Опишите ваш проект"
                            rows={4}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="link">Ссылка на облачное хранилище с презентацией проекта</Label>
                        <Input
                            id="link"
                            type="url"
                            value={currentProject.link}
                            onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                            placeholder="https://..."
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="competition">Участие в конкурсе</Label>
                        <Input
                            id="competition"
                            value={currentProject.competition}
                            onChange={(e) => setCurrentProject({ ...currentProject, competition: e.target.value })}
                            placeholder="Укажите название конкурса и занятое место"
                        />
                    </div>

                    <Button type="button" onClick={addProject} className="mt-4 w-full">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Добавить проект
                    </Button>
                </div>

                {projects.length > 0 && (
                    <div className="space-y-4 mt-8">
                        <h3 className="text-lg font-medium">Добавленные проекты</h3>
                        <div className="grid gap-4">
                            {projects.map((project) => (
                                <div key={project.id} className="border rounded-lg p-4 relative">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-2 right-2"
                                        onClick={() => removeProject(project.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>

                                    <div className="grid gap-2">
                                        <div>
                                            <span className="font-medium">Компания:</span> {project.companyName}
                                        </div>

                                        {project.companyTypes.length > 0 && (
                                            <div>
                                                <span className="font-medium">Типы компании:</span>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {project.companyTypes.map((type) => (
                                                        <Badge key={type} variant="outline" className="px-2 py-0.5">
                                                            {type}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {project.projectTypes.length > 0 && (
                                            <div>
                                                <span className="font-medium">Типы проекта:</span>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {project.projectTypes.map((type) => (
                                                        <Badge key={type} variant="outline" className="px-2 py-0.5">
                                                            {type}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {project.description && (
                                            <div>
                                                <span className="font-medium">Описание:</span> {project.description}
                                            </div>
                                        )}

                                        {project.link && (
                                            <div>
                                                <span className="font-medium">Ссылка:</span>{" "}
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {project.link}
                                                </a>
                                            </div>
                                        )}

                                        {project.competition && (
                                            <div>
                                                <span className="font-medium">Конкурс:</span> {project.competition}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobSeekerPortfolioSection;