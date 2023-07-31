import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import userRouter from "./routers/user_router";
import { authMiddelware } from "./middlewares/auth_middleware";

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(helmet());
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => res.send({ message: 'Success' }));
        this.app.use('/users', authMiddelware, userRouter);
    }
}

const port: number = 3000;
const app: Application = new App().app;
app.listen(port, () => console.log('Server running on http://localhost:' + port));