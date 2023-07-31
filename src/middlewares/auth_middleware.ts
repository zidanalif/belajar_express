import { Request, Response, NextFunction } from "express";

export const authMiddelware = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
    }
    next();
}