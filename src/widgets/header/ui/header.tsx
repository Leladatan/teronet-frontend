import HeaderLogo from "@/widgets/header/ui/components/header-logo";
import HeaderAuthButtons from "@/widgets/header/ui/components/header-auth-buttons";

export const Header = () => {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <HeaderLogo/>
                <HeaderAuthButtons/>
            </div>
        </header>
    );
};

export default Header;