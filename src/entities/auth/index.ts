import { AuthLogin, AuthRegister } from "@/entities/auth/types";

import { api } from "@/entities";
import { User } from "@/entities/users/types";

export const authRequests = {
  login: async (data: AuthLogin) =>
    await api.post<{ user: User }>("/auth/login", data).then((res) => res.data),
  register: async (data: AuthRegister) => await api.post("/auth/register", data),
  me: async () => await api.post<User>("/auth/me").then((res) => res.data),
  logout: async () => await api.post("/auth/logout"),
};
