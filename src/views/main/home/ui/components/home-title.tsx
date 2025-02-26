import {routes} from "@/shared/const/routes";

const HomeTitle = () => {
    return (
        <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Добро пожаловать в {routes.home.title}</h1>
            <p className="text-xl text-muted-foreground">Свяжитесь с работодателями и найдите свою возможность</p>
        </div>
    );
};

export default HomeTitle;