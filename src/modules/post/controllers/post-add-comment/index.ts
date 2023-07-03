import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostAddCommentService } from "@modules/post/services";
import { PostAddCommentController } from "./post-add-comment-controller";

const postAddCommentService = new PostAddCommentService(postInMemoryRepository);
const postAddCommentController = new PostAddCommentController(postAddCommentService);

export { postAddCommentController };
