import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import { produtos } from './src/routes';

const server = express();

// iniciando o banco de dados
mongoose.connect(config.database.urlConnection, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

server.use(express.json());
server.use(cors()); //deste modo todos os dominios ou qualquer dominio pode requisitar dados externamente. Mas é possivel configurar apenas dominios específicos.

mongoose.Promise = global.Promise;

// rotas
server.use('/api', produtos);

server.listen(config.server.port);

export default server;