import { Schema, model, Document } from 'mongoose';

interface UserModelInterface extends Document{}

const UserSchema: Schema = new Schema({
    BranchId: {
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
    img: String,
    manager: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
})
        
export default model<UserModelInterface>('User', UserSchema);