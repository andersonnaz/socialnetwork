import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostFindService } from "@modules/post/services";
import { PostFindController } from "./post-find-controller";

const postFindService = new PostFindService(postInMemoryRepository);
const postFindController = new PostFindController(postFindService);

export { postFindController };
