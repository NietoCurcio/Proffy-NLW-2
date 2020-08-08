// primeiro arquivo (server.ts) acessado quando o servidor (backend, server side) eh executado
// ts-node-dev eh tipo o nodemon que dx automatico se tiver modificação em algum script e tbm dx mais compativel com o typescrit
import express from 'express';
import routes from './routes';
import cors from 'cors'
// typescript usa ES2017

const app = express();
// chama a função 

app.use(cors())
app.use(express.json())
// antigamente tinha o body-parse dependecy

// http://localhost:3333/users
// http://localhost:3333/contacts
// recurso eh o nome no final da rota

// methods:
// GET- buscar ou listar uma informação
// POST - Criar alguma nova infomação
// PUT - Atualizar uma informação existente
// DELETE - Deletar uma informação existente

// o navegador sempre faz a requisião pelo metodo get

// Params:
// body - request body, criação ou atualização de dado 
// route params -  identifica o recurso na rota
// query params  - listagem, paginação, ordenação /users?page=2&sort=name

// (detro da função na rota)
// console.log(req.body) { "name": "felipe" } que passamos no body (json format) da requisição
// console.log(req.params) {id: 1} rota /users/:id
// console.log(req.query) {page: 2, sort: name} /users?page=2&sort=name, rota = /users

app.use(routes)

app.listen(3333);
// todo site, todo endereço tem porta, quando nao aparece eh a 80 (padrao)
// receive http requests localhost:3333, routes = localhost:3333/users /produtos /cadastrar

// SELECT * FROM users
// no knex fica knex('users').select('*')