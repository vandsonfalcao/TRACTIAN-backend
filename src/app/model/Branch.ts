import { Schema, model, Document } from 'mongoose';

interface BranchModelInterface extends Document{}

const BranchSchema: Schema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone1: String,
    phone2: String,
},{
    timestamps: true,
})
        
export default model<BranchModelInterface>('Branch', BranchSchema);