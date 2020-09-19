import { Produto } from '../schemas';

module.exports = {
	// lista
	async index(req, res) {
		// usando desestruturação para pegar o param page do objeto req.query. Se não existir valor no req o padrão é 1
		const { page = 1 } = req.query,
			produtos = await Produto.paginate({}, { page, limit: 10 })
		;

		return res.json(produtos);
	},

	// exibir detalhe de um registro
	async show(req, res) {
		const produto = await Produto.findById(req.params.id);
		return res.json(produto);
	},

	// criação
	async create(req, res) {
		const produto = await Produto.create(req.body);
		return res.json(produto);
	},

	// atualizar registro
	async update(req, res) {
		const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false });
		return res.json(produto);
	},

	// remover registro
	async delete(req, res) {
		await Produto.findByIdAndRemove(req.params.id, { useFindAndModify: false });
		return res.send();
	}
}