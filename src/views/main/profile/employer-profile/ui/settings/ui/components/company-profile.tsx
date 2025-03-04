"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/shared/lib/utils";

import { Check, ChevronsUpDown, Pencil, Save } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/shared/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Card, CardContent } from "@/shared/components/ui/card";

import { useState } from "react";
import { useForm } from "react-hook-form";

const companyTypes = [
    { label: "B2B", value: "b2b" },
    { label: "B2C", value: "b2c" },
    { label: "Международная", value: "international" },
    { label: "Федеральная", value: "federal" },
    { label: "Местная", value: "local" },
    { label: "Крупный бизнес", value: "large" },
    { label: "Малый бизнес", value: "small" },
    { label: "Средний бизнес", value: "medium" },
    { label: "FMCG", value: "fmcg" },
    { label: "IT", value: "it" },
    { label: "Телекоммуникации", value: "telecom" },
    { label: "Ритейл", value: "retail" },
    { label: "Финансы", value: "finance" },
    { label: "Медицина", value: "medicine" },
    { label: "Бьюти индустрия", value: "beauty" },
    { label: "Образование", value: "education" },
    { label: "Туризм", value: "tourism" },
    { label: "Логистика", value: "logistics" },
    { label: "Легкая промышленность", value: "light_industry" },
    { label: "Сельское хозяйство", value: "agriculture" },
    { label: "Строительство", value: "construction" },
    { label: "Недвижимость", value: "real_estate" },
    { label: "Автобизнес", value: "auto" },
    { label: "Реклама/маркетинг/PR", value: "marketing" },
    { label: "Общественное питание", value: "food_service" },
    { label: "Искусство", value: "art" },
    { label: "Развлечения", value: "entertainment" },
    { label: "Спорт", value: "sports" },
    { label: "Услуги", value: "services" },
];

const employmentTypes = [
    { label: "Постоянная работа", value: "full_time" },
    { label: "Работа с непостоянным графиком", value: "flexible" },
    { label: "Удаленная работа", value: "remote" },
    { label: "Работа по заказу", value: "project_based" },
    { label: "Другое", value: "other" },
];

const projectTypes = [
    { label: "Диджитал-кампания", value: "digital_campaign" },
    { label: "Маркетинговая стратегия", value: "marketing_strategy" },
    { label: "Брендинг", value: "branding" },
    { label: "Креативная концепция продвижения", value: "creative_concept" },
    { label: "Дизайн рекламной продукции", value: "ad_design" },
    { label: "PR-кампания", value: "pr_campaign" },
    { label: "Другое", value: "other" },
];

const softSkills = [
    { id: "stress_resistance", label: "Стрессоустойчивость" },
    { id: "innovation", label: "Инновационность" },
    { id: "motivation", label: "Мотивированность" },
    { id: "collaboration", label: "Сотрудничество" },
    { id: "influence", label: "Влияние" },
    { id: "responsibility", label: "Ответственность" },
    { id: "independence", label: "Самостоятельность" },
    { id: "information_analysis", label: "Анализ информации" },
    { id: "decision_making", label: "Принятие решений" },
    { id: "planning", label: "Планирование" },
    { id: "mentoring", label: "Наставничество" },
    { id: "networking", label: "Налаживание контактов" },
    { id: "result_oriented", label: "Ориентация на результат" },
];

const formSchema = z.object({
    legalName: z.string().min(2, {
        message: "Название юридического лица должно содержать минимум 2 символа",
    }),
    brandName: z.string().min(2, {
        message: "Название бренда должно содержать минимум 2 символа",
    }),
    companyTypes: z.array(z.string()).min(1, {
        message: "Выберите хотя бы один тип компании",
    }),
    employmentTypes: z.array(z.string()).min(1, {
        message: "Выберите хотя бы один тип занятости",
    }),
    projectTypes: z.array(z.string()).min(1, {
        message: "Выберите хотя бы один тип проекта",
    }),
    softSkills: z.array(z.string()).min(1, {
        message: "Выберите хотя бы один софтскилл",
    }),
    logo: z.string().optional(),
});

const EmployerProfileSettingsPage = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [selectedCompanyTypes, setSelectedCompanyTypes] = useState<string[]>([]);
    const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<string[]>([]);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            legalName: "ООО Технологии будущего",
            brandName: "FutureTech",
            companyTypes: ["it", "international"],
            employmentTypes: ["full_time", "remote"],
            projectTypes: ["digital_campaign", "marketing_strategy"],
            softSkills: ["innovation", "collaboration", "result_oriented"],
            logo: "/placeholder.svg?height=100&width=100",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>)=> {
        console.log(values);
        setIsEditing(false);
    };

    return (
        <Card className="w-full">
            <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Информация о компании</h2>
                    <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? (
                            <>
                                <Save className="mr-2 h-4 w-4" /> Сохранить
                            </>
                        ) : (
                            <>
                                <Pencil className="mr-2 h-4 w-4" /> Редактировать
                            </>
                        )}
                    </Button>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="legalName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Название юридического лица</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Введите название юридического лица" {...field} disabled={!isEditing} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="brandName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Название бренда</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Введите название бренда" {...field} disabled={!isEditing} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="companyTypes"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Тип компании</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    disabled={!isEditing}
                                                    className={cn("w-full justify-between", !field.value.length && "text-muted-foreground")}
                                                >
                                                    {field.value.length > 0 ? `Выбрано ${field.value.length} типов` : "Выберите типы компании"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Поиск типа..." />
                                                <CommandList>
                                                    <CommandEmpty>Тип не найден.</CommandEmpty>
                                                    <CommandGroup className="max-h-64 overflow-auto">
                                                        {companyTypes.map((type) => (
                                                            <CommandItem
                                                                value={type.label}
                                                                key={type.value}
                                                                onSelect={() => {
                                                                    const updatedValue = field.value.includes(type.value)
                                                                        ? field.value.filter((value) => value !== type.value)
                                                                        : [...field.value, type.value]
                                                                    form.setValue("companyTypes", updatedValue)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.value.includes(type.value) ? "opacity-100" : "opacity-0",
                                                                    )}
                                                                />
                                                                {type.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="employmentTypes"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Поиск соискателей/исполнителей на</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    disabled={!isEditing}
                                                    className={cn("w-full justify-between", !field.value.length && "text-muted-foreground")}
                                                >
                                                    {field.value.length > 0 ? `Выбрано ${field.value.length} типов` : "Выберите типы занятости"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Поиск типа..." />
                                                <CommandList>
                                                    <CommandEmpty>Тип не найден.</CommandEmpty>
                                                    <CommandGroup>
                                                        {employmentTypes.map((type) => (
                                                            <CommandItem
                                                                value={type.label}
                                                                key={type.value}
                                                                onSelect={() => {
                                                                    const updatedValue = field.value.includes(type.value)
                                                                        ? field.value.filter((value) => value !== type.value)
                                                                        : [...field.value, type.value]
                                                                    form.setValue("employmentTypes", updatedValue)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.value.includes(type.value) ? "opacity-100" : "opacity-0",
                                                                    )}
                                                                />
                                                                {type.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="projectTypes"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Тип проекта или специализации соискателя</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    disabled={!isEditing}
                                                    className={cn("w-full justify-between", !field.value.length && "text-muted-foreground")}
                                                >
                                                    {field.value.length > 0 ? `Выбрано ${field.value.length} типов` : "Выберите типы проектов"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Поиск типа..." />
                                                <CommandList>
                                                    <CommandEmpty>Тип не найден.</CommandEmpty>
                                                    <CommandGroup>
                                                        {projectTypes.map((type) => (
                                                            <CommandItem
                                                                value={type.label}
                                                                key={type.value}
                                                                onSelect={() => {
                                                                    const updatedValue = field.value.includes(type.value)
                                                                        ? field.value.filter((value) => value !== type.value)
                                                                        : [...field.value, type.value]
                                                                    form.setValue("projectTypes", updatedValue)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        field.value.includes(type.value) ? "opacity-100" : "opacity-0",
                                                                    )}
                                                                />
                                                                {type.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="softSkills"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">Приоритетные софтскиллы соискателя</FormLabel>
                                        <FormDescription>Выберите необходимые навыки для соискателя</FormDescription>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        {softSkills.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="softSkills"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    disabled={!isEditing}
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">{item.label}</FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {isEditing && <Button type="submit">Сохранить изменения</Button>}
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default EmployerProfileSettingsPage;