export default {
	server: {
		port: 3001
	},

	database: {
		urlConnection: 'mongodb://localhost:27017/node-api-mongo'
	},

	enums: {
		status: [
			'Ativo',
			'Inativo'
		]
	}
}