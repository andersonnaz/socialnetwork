import postInMemoryRepository from "@modules/post/repositories/post-inMemory-repository";
import { PostUpdateService } from "@modules/post/services";
import { PostUpdateController } from "./post-update-controller";

const postUpdateService = new PostUpdateService(postInMemoryRepository);
const postUpdateController = new PostUpdateController(postUpdateService);

export { postUpdateController };
