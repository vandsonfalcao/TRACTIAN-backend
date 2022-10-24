import { Request, Response } from 'express'
import Company from '../model/Company';

export = {
    async store(req: Request, res: Response){
        const { name, cnpj } = req.body;
        try {
            const company = await Company.create({ name, cnpj})
            return res.json({ company, menssage: "create sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async update(req: Request, res: Response){
        const { companyId } = req.params;
        const companyExists = await Company.findById(companyId)
        if (!companyExists) {
            return res.status(400).json({ erro: "company not exists!" })
        }

        const { name } = req.body;
        try {
            const company = await Company.findByIdAndUpdate(companyId, {
                name
            })
            return res.json({ company, menssage: "update sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async delete(req: Request, res: Response){
        const { companyId } = req.params;
        const companyExists = await Company.findById(companyId)
        if (!companyExists) {
            return res.status(400).json({ erro: "company not exists!" })
        }
        try {
            const company = await Company.findByIdAndDelete(companyId)
            return res.json({ company, menssage: "delete sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req: Request, res: Response){
        try {
            const { companyId } = req.params;
            const companyExists = await Company.findById(companyId)
            if (!companyExists) {
                return res.status(400).json({ erro: "company not exists!" })
            }
            return res.json(companyExists)
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req: Request, res: Response){
        try {
            const company = await Company.find()
            return res.json(company)
        } catch (error) {
            return res.json(error);
        }
    },
}