export type UserTypes = "JOB_SEEKER" | "EMPLOYER";
export type UserRoles = "ADMIN" | "USER";

export type User = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  telegram: string;
  type: UserTypes;
  role: UserRoles;
  createdAt: Date;
  updatedAt: Date;
};
