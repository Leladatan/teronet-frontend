"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/shared/store/user-store";
import Cookies from "js-cookie";

const publicRoutes = ["/", "/login", "/register"];
const adminRoutes = ["/admin"];

export const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, user, checkAuth } = useUserStore();
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const hasAccessToken = Cookies.get("access_token");
      const hasRefreshToken = Cookies.get("refresh_token");

      if (!hasAccessToken && !hasRefreshToken) {
        setIsCheckingAuth(false);
        return;
      }

      try {
        await checkAuth();
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, [checkAuth]);

  useEffect(() => {
    if (isCheckingAuth) return;

    const isPublicRoute = publicRoutes.includes(pathname);
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
    const isAuthRoute = pathname === "/login" || pathname === "/register";

    if (!isAuthenticated) {
      if (!isPublicRoute) {
        router.push("/login");
        return;
      }
      return;
    }

    if (isAuthenticated) {
      if (isAuthRoute) {
        router.push("/");
        return;
      }

      if (isAdminRoute && user?.role !== "ADMIN") {
        router.push("/");
        return;
      }
    }
  }, [isAuthenticated, pathname, router, isCheckingAuth, user?.role]);

  return <>{children}</>;
};
