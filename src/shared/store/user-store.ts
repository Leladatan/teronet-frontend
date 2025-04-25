"use client";

import { User } from "@/entities/users/types";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { authRequests } from "@/entities/auth";

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setError: (error) => set({ error }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      },
      checkAuth: async () => {
        try {
          set({ isLoading: true, error: null });
          const data: User = await authRequests.me();
          set({ user: data, isAuthenticated: true });
        } catch {
          set({ user: null, isAuthenticated: false });
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "user-storage",
    }
  )
);
