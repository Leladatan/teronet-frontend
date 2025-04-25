"use client";

import { User } from "@/entities/users/types";

import { Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet";

import HeaderNav from "@/widgets/header/ui/components/header-nav/header-nav";

import { useState } from "react";

interface Props {
  user: User | null;
  handleLogout: () => void;
}

const HeaderMobileMenu = ({ user, handleLogout }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
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
        <HeaderNav user={user} handleLogout={handleLogout} />
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobileMenu;
