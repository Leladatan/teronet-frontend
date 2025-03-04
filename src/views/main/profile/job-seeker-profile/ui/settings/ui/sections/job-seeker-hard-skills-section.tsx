"use client";

import type React from "react";
import { PlusCircle, X } from "lucide-react";

import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

import { useState } from "react";


const JobSeekerHardSkillsSection = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [currentSkill, setCurrentSkill] = useState<string>("");

    const addSkill = () => {
        if (currentSkill.trim() === "") return;

        if (!skills.includes(currentSkill.trim())) {
            setSkills([...skills, currentSkill.trim()]);
            setCurrentSkill("");
        }
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Хардскиллы</h2>

            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="hardskills">Укажите ваши профессиональные навыки</Label>
                    <div className="flex gap-2">
                        <Input
                            id="hardskills"
                            value={currentSkill}
                            onChange={(e) => setCurrentSkill(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Введите навык и нажмите Enter или кнопку Добавить"
                            className="flex-1"
                        />
                        <Button type="button" onClick={addSkill}>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Добавить
                        </Button>
                    </div>
                </div>

                {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"
                            >
                                {skill}
                                <button
                                    className="ml-2 text-secondary-foreground/70 hover:text-secondary-foreground"
                                    onClick={() => removeSkill(skill)}
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6">
                    <Label htmlFor="additionalInfo">Дополнительная информация</Label>
                    <Textarea
                        id="additionalInfo"
                        placeholder="Опишите подробнее ваши профессиональные навыки, опыт работы с технологиями, инструментами и т.д."
                        rows={6}
                        className="mt-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default JobSeekerHardSkillsSection;