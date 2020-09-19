import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

import config from '../../config/config';

const ProdutoSchema = new Schema({
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
		required: true,
		enum: config.enums.status
	}
});

// adicionando plugin do mongoose paginate no schema do produto
ProdutoSchema.plugin(mongoosePaginate);

export default model('Produto', ProdutoSchema);