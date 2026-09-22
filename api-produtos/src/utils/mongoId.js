import { isValidObjectId } from "mongoose";

// Diferencia "id com formato inválido" (erro do cliente, 400) de
// um erro real de servidor (500).
export const ehIdValido = (id) => isValidObjectId(id);
