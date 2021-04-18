import { Request, Response } from 'express'
import User from '../model/User';

export = {
    async store(req: Request, res: Response){
        const { branchId, name, cpf, email, phone1, phone2 } = req.body;
        try {
            const user = await User.create({ branchId, name, cpf, email, phone1, phone2})
            return res.json({ user, menssage: "create sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async update(req: Request, res: Response){
        const { userId } = req.params;
        const userExists = await User.findById(userId)
        if (!userExists) {
            return res.status(400).json({ erro: "user not exists!" })
        }

        const { name, email, phone1, phone2 } = req.body;
        try {
            const user = await User.findByIdAndUpdate(userId, {
                name, email, phone1, phone2
            })
            return res.json({ user, menssage: "update sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async delete(req: Request, res: Response){
        const { userId } = req.params;
        const userExists = await User.findById(userId)
        if (!userExists) {
            return res.status(400).json({ erro: "user not exists!" })
        }
        try {
            const user = await User.findByIdAndDelete(userId)
            return res.json({ user, menssage: "delete sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req: Request, res: Response){
        try {
            const { userId } = req.params;
            const userExists = await User.findById(userId)
            if (!userExists) {
                return res.status(400).json({ erro: "user not exists!" })
            }
            return res.json(userExists)
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req: Request, res: Response){
        try {
            const user = await User.find()
            return res.json(user)
        } catch (error) {
            return res.json(error);
        }
    },
}