import { Schema, model, Document } from 'mongoose';

interface DeviceModelInterface extends Document{}

const DeviceSchema: Schema = new Schema({
    //branch + Company
    branchId: {
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    serialNumber: {
        type: String,
        require: true,
        unique: true,
    },
    img: String,
    description: String,
    model: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        default: 'inRest',
    },
    health: {
        type: Number,
        default: 100,
    },
},{
    timestamps: true,
})
        
export default model<DeviceModelInterface>('Device', DeviceSchema);