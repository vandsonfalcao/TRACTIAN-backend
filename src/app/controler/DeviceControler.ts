import { Request, Response } from 'express'
import Device from '../model/Device';

export = {
    async store(req: Request, res: Response){
        const { 
            branchId, userId, name, serialNumber, img, description, model, status, health 
        } = req.body;
        try {
            const device = await Device.create({ 
                branchId, userId, name, serialNumber, img, description, model, status, health})
            return res.json({ device, menssage: "create sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async update(req: Request, res: Response){
        const { deviceId } = req.params;
        const deviceExists = await Device.findById(deviceId)
        if (!deviceExists) {
            return res.status(400).json({ erro: "device not exists!" })
        }

        const { branchId, userId, name, img, description, model, status, health } = req.body;
        try {
            const device = await Device.findByIdAndUpdate(deviceId, {
                branchId, userId, name, img, description, model, status, health
            })
            return res.json({ device, menssage: "update sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async delete(req: Request, res: Response){
        const { deviceId } = req.params;
        const deviceExists = await Device.findById(deviceId)
        if (!deviceExists) {
            return res.status(400).json({ erro: "device not exists!" })
        }
        try {
            const device = await Device.findByIdAndDelete(deviceId)
            return res.json({ device, menssage: "delete sucess!" })
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req: Request, res: Response){
        try {
            const { deviceId } = req.params;
            const deviceExists = await Device.findById(deviceId)
            if (!deviceExists) {
                return res.status(400).json({ erro: "device not exists!" })
            }
            return res.json(deviceExists)
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req: Request, res: Response){
        try {
            const device = await Device.find()
            return res.json(device)
        } catch (error) {
            return res.json(error);
        }
    },
}