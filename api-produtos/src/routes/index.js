import express from "express";
import produtoRouter from "./produto.routes.js";

export function registrarRotas(app) {
    app.get("/", (req, res) => res.status(200).send("API-PRODUTOS no ar"));
    app.use(express.json());
    app.use(produtoRouter);
}
