# API-PRODUTOS

API REST para gerenciamento de produtos: cadastro, consulta, atualização e remoção de registros. Construída com Node.js, Express e MongoDB (via Mongoose).

## Tecnologias

- Node.js
- Express 5
- MongoDB + Mongoose
- dotenv (variáveis de ambiente)
- nodemon (reload em desenvolvimento)

## Requisitos

- Node.js 18+
- Um banco MongoDB (Atlas ou instância local)

## Como rodar

1. Clone o projeto e entre na pasta:
   ```bash
   git clone <url-do-repositorio>
   cd api-produtos
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o `.env` a partir do exemplo:
   ```bash
   cp .env.example .env
   ```
   E preencha:
   ```
   DB_CONNECTION_STRING=sua_string_de_conexao_do_mongodb
   PORT=8000
   ```
   > Não versione o `.env` — ele já está no `.gitignore`.

4. Suba o servidor em modo desenvolvimento:
   ```bash
   npm run dev
   ```
   Saída esperada:
   ```
   Servidor rodando na porta 8000
   Conexão realizada com sucesso!
   ```

   API disponível em `http://localhost:8000` (ou na porta definida em `PORT`).

## Rotas

| Método | Endpoint          | Função                              |
|--------|-------------------|--------------------------------------|
| GET    | `/`                | Healthcheck da API                  |
| GET    | `/produtos`        | Lista todos os produtos             |
| GET    | `/produtos?nome=`  | Busca produtos por nome             |
| GET    | `/produtos/:id`    | Retorna um produto específico       |
| POST   | `/produtos`        | Cadastra um novo produto            |
| PUT    | `/produtos/:id`    | Atualiza um produto existente       |
| DELETE | `/produtos/:id`    | Remove um produto                   |

### Corpo esperado em POST / PUT

```json
{
  "nome": "Caneta",
  "preco": 2.5,
  "quantidade": 100
}
```

### Códigos de resposta

- `200` — operação concluída
- `201` — produto criado
- `400` — dados ou id inválidos
- `404` — produto não encontrado
- `500` — erro interno do servidor

## Estrutura do projeto

```
api-produtos/
├── server.js                          # inicializa o servidor HTTP
├── src/
│   ├── app.js                         # monta o Express e conecta ao banco
│   ├── config/
│   │   └── database.js                # conexão com o MongoDB
│   ├── models/
│   │   └── produto.model.js           # schema/model do produto
│   ├── repositories/
│   │   └── produto.repository.js      # acesso aos dados (camada sobre o Mongoose)
│   ├── controllers/
│   │   └── produto.controller.js      # regras das requisições
│   └── routes/
│       ├── index.js                   # registra as rotas na aplicação
│       └── produto.routes.js          # endpoints de /produtos
├── .env.example
└── package.json
```
