import express from "express";
import { iniciarConexaoComBanco } from "./config/database.js";
import { registrarRotas } from "./routes/index.js";

async function criarApp() {
    const conexao = await iniciarConexaoComBanco();

    conexao.on("error", (erro) => {
        console.error("Não foi possível conectar ao banco:", erro);
    });

    conexao.once("open", () => {
        console.log("Conexão realizada com sucesso!");
    });

    const app = express();
    registrarRotas(app);
    return app;
}

export default await criarApp();
