import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostListService } from "@modules/post/services";
import { PostListController } from "./post-list-controller";

const postListService = new PostListService(postInMemoryRepository);
const postListController = new PostListController(postListService);

export { postListController };
