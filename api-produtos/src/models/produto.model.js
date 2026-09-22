import { Schema, model } from "mongoose";

// _id já é gerado automaticamente pelo Mongoose, então não é preciso
// declarar um campo "id" manual no schema.
const ProdutoSchema = new Schema(
    {
        nome: { type: String, required: true, trim: true },
        preco: { type: Number, required: true, min: 0 },
        quantidade: { type: Number, default: 0, min: 0 },
    },
    { versionKey: false }
);

// Cria/usa a coleção "produtos" no banco
export const Produto = model("produtos", ProdutoSchema);
