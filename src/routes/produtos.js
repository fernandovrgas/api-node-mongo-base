import express from 'express';
import { Produtos } from '../controllers/index';

const routes = express.Router();

routes.get('/produtos', Produtos.index);
routes.get('/produtos/:id', Produtos.show);
routes.post('/produtos', Produtos.create);
routes.put('/produtos/:id', Produtos.update);
routes.delete('/produtos/:id', Produtos.delete);

module.exports = routes;