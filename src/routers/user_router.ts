import UserController from "../controllers/user_controller";
import AppRouter from "../app/app_router";
class UserRouter extends AppRouter {
    routes(): void {
        this.router.get('/', UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.delete)
    }
}

export default new UserRouter().router;