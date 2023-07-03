import messageRouter from "@modules/message/routes/message-routes";
import postRouter from "@modules/post/routes/post-routes";
import userRouter from "@modules/user/routes/user-routes";
import { Router } from "express";

const router = Router();

router.use('/api/v1/user', userRouter);
router.use('/api/v1/post', postRouter);
router.use('/api/v1/message', messageRouter);

export default router;
