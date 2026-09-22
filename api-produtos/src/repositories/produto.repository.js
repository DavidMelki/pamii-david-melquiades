import { Produto } from "../models/produto.model.js";

// Isola as chamadas ao Mongoose numa camada própria, para o controller
// não depender diretamente do model.
export const ProdutoRepository = {
    listar(filtro = {}) {
        return Produto.find(filtro);
    },
    buscarPorId(id) {
        return Produto.findById(id);
    },
    criar(dados) {
        return Produto.create(dados);
    },
    atualizar(id, dados) {
        return Produto.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
    },
    remover(id) {
        return Produto.findByIdAndDelete(id);
    },
};
