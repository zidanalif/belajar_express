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
    }
}

export default new UserRouter().router;