module.exports = {
	port: 4000,
	mongodb: {
		url: 'mongodb://localhost:27017/cloudPainting',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'huangwei9527'},
	crypto: {secret: '#*#*huangwei9527*#*#'},
	baseUrl: ''
}
