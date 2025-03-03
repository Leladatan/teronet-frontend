"use client"

import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

import { useState } from "react";

const JobSeekerProfileSection = () => {
    const [university, setUniversity] = useState<string>("");
    const [program, setProgram] = useState<string>("");
    const [graduationYear, setGraduationYear] = useState<string>("");
    const [jobPreferences, setJobPreferences] = useState<string[]>([]);
    const [otherPreference, setOtherPreference] = useState<string>("");

    const handlePreferenceChange = (preference: string) => {
        if (jobPreferences.includes(preference)) {
            setJobPreferences(jobPreferences.filter((p) => p !== preference))
        } else {
            setJobPreferences([...jobPreferences, preference])
        }
    }

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Профиль</h2>

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="university">Вуз</Label>
                    <Input
                        id="university"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="Введите название учебного заведения"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="program">Программа обучения</Label>
                    <Input
                        id="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        placeholder="Введите программу обучения"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="graduationYear">Год окончания вуза</Label>
                    <Select value={graduationYear} onValueChange={setGraduationYear}>
                        <SelectTrigger id="graduationYear">
                            <SelectValue placeholder="Выберите год окончания" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label>Готовность к получению предложений</Label>
                    <div className="grid gap-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="fulltime"
                                checked={jobPreferences.includes("fulltime")}
                                onCheckedChange={() => handlePreferenceChange("fulltime")}
                            />
                            <Label htmlFor="fulltime" className="font-normal">
                                Постоянная работа
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="parttime"
                                checked={jobPreferences.includes("parttime")}
                                onCheckedChange={() => handlePreferenceChange("parttime")}
                            />
                            <Label htmlFor="parttime" className="font-normal">
                                Работа с непостоянным графиком
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remote"
                                checked={jobPreferences.includes("remote")}
                                onCheckedChange={() => handlePreferenceChange("remote")}
                            />
                            <Label htmlFor="remote" className="font-normal">
                                Удаленная работа
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="contract"
                                checked={jobPreferences.includes("contract")}
                                onCheckedChange={() => handlePreferenceChange("contract")}
                            />
                            <Label htmlFor="contract" className="font-normal">
                                Работа по заказу
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="other"
                                checked={jobPreferences.includes("other")}
                                onCheckedChange={() => handlePreferenceChange("other")}
                            />
                            <Label htmlFor="other" className="font-normal">
                                Другое
                            </Label>
                        </div>

                        {jobPreferences.includes("other") && (
                            <Input
                                value={otherPreference}
                                onChange={(e) => setOtherPreference(e.target.value)}
                                placeholder="Укажите свой вариант"
                                className="mt-2"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerProfileSection;
