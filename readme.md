# Api Node / Mongo

API desenvolvida em ambiente de estudo. Tecnologias utilizadas:

* **Mongo**: banco de dados não relacional. Facilita muito o trabalho principalmente considerando o uso de JSON
* **Express**: muito útil para as definições de rotas da API
* **Nodemon**: apenas para ambiente de desenvolvimento. O Nodemon é muito útil porque carreta as alterações de forma automática. Deste modo não é necessario reiniciar o servidor sempre que precisar ver uma alteração feita na aplicação
* **Mongoose**: é um ORM de bancos não relacionais como o Mongo.
* **.editorconfig**: Referente a um pligin utilizado no VS Code para ajudar nos padroes de codificação.
* **mongoose-paginate**: biblioteca responsável por permitir a paginação no mongoose
* **cors**: biblioteca responsável por permitir acesso externo para a API

## Inicializando o projeto.
A inicialização do projeto é muito simples uma vez que no local onde o projeto vai ser inicializado tenha o NPM, Node.js e MongoDB instalado.
Considerando isso como verdade, após clonar o projeto basta:

* Rodar o comando:
```
npm start
```

Uma vez executado este comando espera-se que todos os pacotes e dependencias sejam instalados e o servidor já seja inicializado através do Nodemon