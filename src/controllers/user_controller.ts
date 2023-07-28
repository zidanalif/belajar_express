import { Request, Response } from "express";

var users: any[] = [
    { id: "1", name: "Asep" },
    { id: "2", name: "Budi" },
    { id: "3", name: "Agung" },
    { id: "4", name: "Windah" }
];
class UserController {

    index(req: Request, res: Response): Response {
        return res.send({ message: 'Success get users', data: users });
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        var user = {
            id: id,
            name: name,
        }

        users.push(user);

        return res.send({ message: 'Success add user', data: user });
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;
        var user = users.find(user => user.id === id);
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        return res.send({ message: 'Success get user by id', data: user });
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;
        var user = users.find(user => user.id === id);
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        user.name = name;
        return res.send({ message: 'Success update user', data: user });
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        var user = users.find(user => user.id === id);
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        return res.send({ message: 'Success delete user' });
    }
}

export default new UserController();