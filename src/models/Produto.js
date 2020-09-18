const mongoose = require('mongoose')
	  mongoosePaginate = require('mongoose-paginate')
;

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
	},
	imagem: {
		type: String
	},
	tags: {
		type: String
	},
	status: {
		type: String,
		required: true
	}
});

// adicionando plugin do mongoose paginate no schema do produto
ProdutoSchema.plugin(mongoosePaginate);

mongoose.model('Produto', ProdutoSchema);