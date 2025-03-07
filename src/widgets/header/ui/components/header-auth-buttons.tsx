import {routes} from "@/shared/const/routes";

import Link from "next/link";
import {Button} from "@/shared/components/ui/button";

const HeaderAuthButtons = () => {
    return (
        <nav className="space-x-4">
            <Button variant="outline" asChild>
                <Link href={routes.login.href}>{routes.login.title}</Link>
            </Button>
            <Button asChild>
                <Link href={routes.register.href}>{routes.register.title}</Link>
            </Button>
        </nav>
    );
};

export default HeaderAuthButtons;