import {AuthLogin, AuthRegister} from "@/entities/auth/types";

import {api} from "@/entities";

export const authRequests = {
    login: async (data: AuthLogin) => await api.post("/auth/login", data).then(res => res.data),
    register: async (data: AuthRegister) => await api.post("/auth/register", data),
};
