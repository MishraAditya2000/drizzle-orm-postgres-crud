import { createUser } from "../users-queries";
import {Request,Response} from 'express';
export const userRegistration = async (req:Request, res:Response): Promise<Response> => {
  try {
    return res.status(200).json({ message: "Working" });
  } catch (error:any) {
    return res.status(error.status).json(error);
  }
};
