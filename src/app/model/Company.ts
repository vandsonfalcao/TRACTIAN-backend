import { Schema, model, Document } from 'mongoose';

interface CompanyModelInterface extends Document{}

const CompanySchema: Schema = new Schema({
    name: String,
    cnpj: {
        type: String,
        require: true,
        unique: true,
    },
},{
    timestamps: true,
})
        
export default model<CompanyModelInterface>('Company', CompanySchema);