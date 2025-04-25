import { AxiosError } from "axios";

type BackendErrorResponse = {
  message: string;
};

export type ErrorResponse = AxiosError<BackendErrorResponse>;
