import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ApiErrorType, ApiResultType } from "../../packages/types/types-api/dist";
import { z } from "zod";
import { joinPath } from "./utils/joinPath";
import status from "http-status";

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors: ApiErrorType[] = [];
  let statusCode = status.INTERNAL_SERVER_ERROR;
  if (err instanceof z.ZodError) {
    const zodIssues = err.errors;
    zodIssues.forEach((issue) => {
      const { message, path } = issue;

      var m = message;
      if (path.length > 0) {
        m = `${message} at "${joinPath(path)}"`;
      }

      errors.push({
        code: issue.code.toUpperCase(),
        message: m,
      });

      statusCode = status.BAD_REQUEST;
    });

    // add more error cases here or create new error handlers

    const apiResponse: ApiResultType<any> = {
      data: null,
      errors: errors,
    };
    res.status(statusCode).json(apiResponse);
  }
};
