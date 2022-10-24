import { Request, Response } from 'express'
import Address from '../model/Address';

export = {
    async store(req: Request, res: Response){
        const { 
            branchId, street, number, neighborhood, city, state, zipcode
        } = req.body;
        try {
            const address = await Address.create({ 
                branchId, street, number, neighborhood, city, state, zipcode
            })
            return res.json({ address, menssage: "create sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async update(req: Request, res: Response){
        const { addressId } = req.params;
        const addressExists = await Address.findById(addressId)
        if (!addressExists) {
            return res.status(400).json({ erro: "address not exists!" })
        }

        const { street, number, neighborhood, city, state, zipcode} = req.body;
        try {
            const address = await Address.findByIdAndUpdate(addressId, {
                street, number, neighborhood, city, state, zipcode
            })
            return res.json({ address, menssage: "update sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async delete(req: Request, res: Response){
        const { addressId } = req.params;
        const addressExists = await Address.findById(addressId)
        if (!addressExists) {
            return res.status(400).json({ erro: "address not exists!" })
        }
        try {
            const address = await Address.findByIdAndDelete(addressId)
            return res.json({ address, menssage: "delete sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req: Request, res: Response){
        try {
            const { addressId } = req.params;
            const addressExists = await Address.findById(addressId)
            if (!addressExists) {
                return res.status(400).json({ erro: "address not exists!" })
            }
            return res.json(addressExists)
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req: Request, res: Response){
        try {
            const address = await Address.find()
            return res.json(address)
        } catch (error) {
            return res.json(error);
        }
    },
}