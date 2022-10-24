import { Request, Response } from 'express'
import Branch from '../model/Branch';

export = {
    async store(req: Request, res: Response){
        const { companyId, name, email, phone1, phone2 } = req.body;
        try {
            const branch = await Branch.create({ companyId, name, email, phone1, phone2})
            return res.json({ branch, menssage: "create sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async update(req: Request, res: Response){
        const { branchId } = req.params;
        const branchExists = await Branch.findById(branchId)
        if (!branchExists) {
            return res.status(400).json({ erro: "branch not exists!" })
        }

        const { name, email, phone1, phone2 } = req.body;
        try {
            const branch = await Branch.findByIdAndUpdate(branchId, {
                name, email, phone1, phone2
            })
            return res.json({ branch, menssage: "update sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async delete(req: Request, res: Response){
        const { branchId } = req.params;
        const branchExists = await Branch.findById(branchId)
        if (!branchExists) {
            return res.status(400).json({ erro: "branch not exists!" })
        }
        try {
            const branch = await Branch.findByIdAndDelete(branchId)
            return res.json({ branch, menssage: "delete sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req: Request, res: Response){
        try {
            const { branchId } = req.params;
            const branchExists = await Branch.findById(branchId)
            if (!branchExists) {
                return res.status(400).json({ erro: "branch not exists!" })
            }
            return res.json(branchExists)
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req: Request, res: Response){
        try {
            const branch = await Branch.find()
            return res.json(branch)
        } catch (error) {
            return res.json(error);
        }
    },
}