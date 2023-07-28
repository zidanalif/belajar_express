import { Router, Request, Response } from "express";
class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Ini index route user');
        })
        this.router.post('/', (req: Request, res: Response) => {
            res.send({ message: 'Anda post dengan data', data: req.body });
        })
    }
}

export default new UserRouter().router;