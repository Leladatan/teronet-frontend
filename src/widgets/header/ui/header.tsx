"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet";

import HeaderLogo from "@/widgets/header/ui/components/header-logo";
import HeaderAuthButtons from "@/widgets/header/ui/components/header-auth-buttons";

import {useEffect, useState} from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`border-b-2 bg-white z-50 transition-shadow ${
            isSticky ? "sticky top-0 shadow-md" : ""
        }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <HeaderLogo />

                <nav className="hidden md:flex">
                    <HeaderAuthButtons />
                </nav>

                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-64 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <HeaderAuthButtons />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
