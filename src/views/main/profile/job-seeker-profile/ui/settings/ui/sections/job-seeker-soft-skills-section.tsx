"use client"

import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

import { useState } from "react";

const JobSeekerSoftSkillsSection = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const softSkills = [
        "Стрессоустойчивость",
        "Инновационность",
        "Мотивированность",
        "Сотрудничество",
        "Влияние",
        "Ответственность",
        "Самостоятельность",
        "Анализ информации",
        "Принятие решений",
        "Планирование",
        "Наставничество",
        "Налаживание контактов",
        "Ориентация на результат",
    ];

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Софтскиллы</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                            id={`skill-${skill}`}
                            checked={selectedSkills.includes(skill)}
                            onCheckedChange={() => toggleSkill(skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="font-normal">
                            {skill}
                        </Label>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Выбранные навыки</h3>
                {selectedSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {selectedSkills.map((skill) => (
                            <div key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                {skill}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">Вы пока не выбрали ни одного навыка</p>
                )}
            </div>
        </div>
    );
};

export default JobSeekerSoftSkillsSection;