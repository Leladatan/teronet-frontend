import {routes} from "@/shared/const/routes";

import Link from "next/link";
import {Button} from "@/shared/components/ui/button";

const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen-70px px-4 text-center">
            <div className="space-y-6">
                <h1 className="text-9xl font-bold text-gray-900">404</h1>

                <p className="text-xl text-gray-600">Страница не найдена</p>

                <div>
                    <Button asChild>
                        <Link href={routes.home.href}>Вернуться на главную</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;