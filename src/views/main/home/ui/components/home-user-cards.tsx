"use client";

import {Card} from "@/shared/components/ui/card";
import {Badge} from "@/shared/components/ui/badge";

type UserCard = {
    type: "seeker" | "employer"
    name: string
    tags: string[]
    company?: string
    field?: string
};

const demoCards: UserCard[] = [
    {
        type: "seeker",
        name: "Алекс К.",
        tags: ["Дизайн UI/UX", "Дизайн Продукта", "Figma"],
    },
    {
        type: "employer",
        name: "Технологические Решения",
        company: "Технологические Решения Инк",
        field: "Разработка Программного Обеспечения",
        tags: ["ИТ", "Программное Обеспечение"],
    },
];

const HomeUserCards = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demoCards.map((card, i) => (
                <Card key={i} className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                        <div>
                            <h3 className="font-semibold">{card.name}</h3>
                            {card.company && <p className="text-sm text-muted-foreground">{card.field}</p>}
                        </div>
                        <Badge variant={card.type === "seeker" ? "secondary" : "outline"}>
                            {card.type === "seeker" ? "Соискатель Работы" : "Работодатель"}
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default HomeUserCards;