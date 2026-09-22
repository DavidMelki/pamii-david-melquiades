import mongoose from "mongoose";
import { ProdutoRepository } from "../repositories/produto.repository.js";
import { ehIdValido } from "../utils/mongoId.js";

// GET /produtos            -> 200
// GET /produtos?nome=Caneta -> filtra por nome, 200
export async function listarProdutos(req, res) {
    try {
        const { nome } = req.query;
        const filtro = nome ? { nome } : {};
        const produtos = await ProdutoRepository.listar(filtro);
        return res.status(200).json(produtos);
    } catch (erro) {
        return res.status(500).json({ message: `${erro.message} - falha ao listar produtos` });
    }
}

// GET /produtos/:id -> 200 | 400 (id inválido) | 404 (não encontrado)
export async function obterProduto(req, res) {
    const { id } = req.params;
    if (!ehIdValido(id)) {
        return res.status(400).json({ message: "id inválido" });
    }
    try {
        const produtoEncontrado = await ProdutoRepository.buscarPorId(id);
        if (!produtoEncontrado) {
            return res.status(404).json({ message: "produto não encontrado" });
        }
        return res.status(200).json(produtoEncontrado);
    } catch (erro) {
        return res.status(500).json({ message: `${erro.message} - falha ao buscar produto` });
    }
}

// POST /produtos -> 201 | 400 (dados inválidos)
export async function criarProduto(req, res) {
    try {
        const novoProduto = await ProdutoRepository.criar(req.body);
        return res.status(201).json({ message: "produto criado com sucesso", produto: novoProduto });
    } catch (erro) {
        if (erro instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ message: `${erro.message} - dados inválidos` });
        }
        return res.status(500).json({ message: `${erro.message} - falha ao criar produto` });
    }
}

// PUT /produtos/:id -> 200 | 400 (id/dados inválidos) | 404 (não encontrado)
export async function editarProduto(req, res) {
    const { id } = req.params;
    if (!ehIdValido(id)) {
        return res.status(400).json({ message: "id inválido" });
    }
    try {
        const produtoAtualizado = await ProdutoRepository.atualizar(id, req.body);
        if (!produtoAtualizado) {
            return res.status(404).json({ message: "produto não encontrado" });
        }
        return res.status(200).json({ message: "produto atualizado", produto: produtoAtualizado });
    } catch (erro) {
        if (erro instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ message: `${erro.message} - dados inválidos` });
        }
        return res.status(500).json({ message: `${erro.message} - falha ao atualizar produto` });
    }
}

// DELETE /produtos/:id -> 200 | 400 (id inválido) | 404 (não encontrado)
export async function removerProduto(req, res) {
    const { id } = req.params;
    if (!ehIdValido(id)) {
        return res.status(400).json({ message: "id inválido" });
    }
    try {
        const produtoRemovido = await ProdutoRepository.remover(id);
        if (!produtoRemovido) {
            return res.status(404).json({ message: "produto não encontrado" });
        }
        return res.status(200).json({ message: "produto removido" });
    } catch (erro) {
        return res.status(500).json({ message: `${erro.message} - falha ao remover produto` });
    }
}
