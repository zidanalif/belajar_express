import { Router } from "express";
import UserController from "../controllers/user_controller";
class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.delete)
    }
}

export default new UserRouter().router;