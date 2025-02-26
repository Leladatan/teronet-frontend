import {routes} from "@/shared/const/routes";

import Link from "next/link";

const HeaderLogo = () => {
    return (
        <Link href={routes.home.href} className="text-xl font-bold">
            {routes.home.title}
        </Link>
    );
};

export default HeaderLogo;