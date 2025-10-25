import { Router } from "express";
import { userRegistration } from "./handlers/post";

const userRouter = Router();

userRouter.route("/signup").get(userRegistration);

export default userRouter;
