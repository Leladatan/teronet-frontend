import { AxiosError } from "axios";

interface BackendErrorResponse {
  message: string;
}

export type ErrorResponse = AxiosError<BackendErrorResponse>;
