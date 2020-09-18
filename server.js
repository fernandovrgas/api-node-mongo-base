const cors = require('cors'),
	  express = require('express'),
      mongoose = require('mongoose'),
      requireDir = require('require-dir'),
      app = express()
;

app.use(express.json());
app.use(cors()); //deste modo todos os dominios ou qualquer dominio pode requisitar dados externamente. Mas é possivel configurar apenas dominios específicos.

// iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/node-api-mongo',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// importando os models da aplicação
requireDir('./src/models/');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);