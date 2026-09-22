import { Router } from "express";
import {
    listarProdutos,
    obterProduto,
    criarProduto,
    editarProduto,
    removerProduto,
} from "../controllers/produto.controller.js";

const produtoRouter = Router();

produtoRouter.get("/produtos", listarProdutos);
produtoRouter.get("/produtos/:id", obterProduto);
produtoRouter.post("/produtos", criarProduto);
produtoRouter.put("/produtos/:id", editarProduto);
produtoRouter.delete("/produtos/:id", removerProduto);

export default produtoRouter;
