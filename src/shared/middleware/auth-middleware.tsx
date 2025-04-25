"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/shared/store/user-store";

import Loader from "@/shared/components/loader";

const publicRoutes = ["/", "/login", "/register"];
const adminRoutes = ["/admin"];

export const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, user, checkAuth, isLoading } = useUserStore();

  useEffect(() => {
    (async () => await checkAuth())();
  }, [checkAuth]);

  useEffect(() => {
    if (isLoading) return;

    const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
    const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

    if (!isAuthenticated && !isPublicRoute) {
      router.push("/login");
      return;
    }

    if (isAuthenticated && isAdminRoute && user?.role !== "ADMIN") {
      router.push("/");
      return;
    }
  }, [isAuthenticated, pathname, router, isLoading, user?.role]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};
