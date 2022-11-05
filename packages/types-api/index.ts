import { z } from "zod";

export type ApiErrorType = {
  code: string;
  message: string;
};

export type ApiResultType<T> = {
  data: T | null;
  errors: ApiErrorType[] | null;
};

export const GetHelloRequestSchema = z.object({
  sub: z.string(),
});

export type GetHelloRequestType = z.infer<typeof GetHelloRequestSchema>;

export const GetHelloResultDataSchema = z.object({
  msg: z.string(),
});

export type GetHelloResultDataType = z.infer<typeof GetHelloResultDataSchema>;
