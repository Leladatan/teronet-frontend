import {api} from "@/entities";

export const usersRequests = {
    job_seekers: async () => await api.get("/users/type/JOB_SEEKER").then((res) => res.data),
    employers: async () => await api.get("users/type/EMPLOYER").then((res) => res.data),
};