import { Schema, model, Document } from 'mongoose';

interface UserModelInterface extends Document{}

const UserSchema: Schema = new Schema({
    branchId: {
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
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
        
export default model<UserModelInterface>('User', UserSchema);