import {AuthLogin} from "@/entities/auth/types";

import {api} from "@/entities";

export const authRequests = {
  login: async (data: AuthLogin) => {
      await api.post("/auth/login", data);
  }
};
