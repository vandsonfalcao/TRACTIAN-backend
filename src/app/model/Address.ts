import { Schema, model, Document } from 'mongoose';

interface AddressModelInterface extends Document{}

const AddressSchema: Schema = new Schema({
    branchId: {
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    street: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,
    },
    neighborhood: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    zipcode: {
        type: String,
        require: true,
    },
},{
    timestamps: true,
})
        
export default model<AddressModelInterface>('Address', AddressSchema);