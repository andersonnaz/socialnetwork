import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostEditCommentService } from "@modules/post/services";
import { PostEditCommentController } from "./post-edit-comment-controller";

const postEditCommentService = new PostEditCommentService(postInMemoryRepository);
const postEditCommentController = new PostEditCommentController(postEditCommentService);

export { postEditCommentController };
