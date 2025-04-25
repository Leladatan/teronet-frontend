"use client";

import { authRequests } from "@/entities/auth";

import Logo from "@/widgets/header/ui/components/logo";
import HeaderNav from "@/widgets/header/ui/components/header-nav/header-nav";
import HeaderMobileMenu from "@/widgets/header/ui/components/header-mobile-menu";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/shared/hooks/use-toast";
import { useUserStore } from "@/shared/store/user-store";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { user, logout } = useUserStore();
  const { toast } = useToast();

  const [isSticky, setIsSticky] = useState<boolean>(false);

  const logoutMutation = useMutation({
    mutationFn: () => authRequests.logout(),
    onSuccess: () => {
      toast({
        title: "Учетная запись",
        description: "Вы успешно покинули учетную запись",
        variant: "default",
      });
      router.push("/");
      logout();
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

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
    <header
      className={`border-b-2 bg-white z-50 transition-shadow ${
        isSticky ? "sticky top-0 shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-4">
          <HeaderNav user={user} handleLogout={handleLogout} />
        </nav>

        <HeaderMobileMenu user={user} handleLogout={handleLogout} />
      </div>
    </header>
  );
};

export default Header;
