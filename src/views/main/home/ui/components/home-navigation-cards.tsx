import Link from "next/link";
import {Button} from "@/shared/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";

const HomeNavigationCards = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Для Соискателей</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>Создайте профиль и свяжитесь с потенциальными работодателями</p>
                    <Button asChild className="w-full">
                        <Link href="/candidates">Просмотреть Вакансии</Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Для Работодателей</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>Найдите квалифицированных кандидатов на ваши позиции</p>
                    <Button asChild className="w-full">
                        <Link href="/employers">Просмотреть Кандидатов</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default HomeNavigationCards;