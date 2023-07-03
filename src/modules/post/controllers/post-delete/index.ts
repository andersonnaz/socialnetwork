import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostDeleteService } from "@modules/post/services";
import { PostDeleteController } from "./post-delete-controller";

const postDeleteService = new PostDeleteService(postInMemoryRepository);
const postDeleteController = new PostDeleteController(postDeleteService);

export { postDeleteController };
