import { Router } from "express";

abstract class AppRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;
}

export default AppRouter;