import { Request, Response } from "express";
import { GetFibonacciNumber } from '../functions/fibonacci'


export const getValue= async (
  req: Request,
  res: Response
): Promise<Response> => {
    const valueReq = req.query.value
    const number  = GetFibonacciNumber(Number(valueReq))
    return res.json({data: number, success: true});
};

