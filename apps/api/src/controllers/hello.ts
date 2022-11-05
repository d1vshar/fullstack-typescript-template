import { NextFunction, Request, Response } from "express";
import asyncHandler from "src/utils/asyncHandler";
import {
  ApiResultType,
  GetHelloRequestSchema,
  GetHelloRequestType,
  GetHelloResultDataType,
} from "../../packages/types/types-api/dist";

export const getHello = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestData: GetHelloRequestType = GetHelloRequestSchema.parse(
        req.body
      );

      const responseData: GetHelloResultDataType = {
        msg: `Hello ${requestData.sub}`,
      };

      const apiResponse: ApiResultType<GetHelloResultDataType> = {
        data: responseData,
        errors: null,
      };

      res.status(200).json(apiResponse);
    } catch (e: any) {
      next(e);
    }
  }
);
