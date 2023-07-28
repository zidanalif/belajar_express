import { Request, Response } from "express";

class UserController {
    index(req: Request, res: Response): Response {
        return res.send({ message: 'Anda get data users' });
    }

    create(req: Request, res: Response): Response {
        return res.send({ message: 'Anda post dengan data', data: req.body });
    }
}

export default new UserController();