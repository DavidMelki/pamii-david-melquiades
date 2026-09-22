import mongoose from "mongoose";

// Abre a conexão com o MongoDB usando a string definida no .env
export async function iniciarConexaoComBanco() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}
