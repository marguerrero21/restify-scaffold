module.exports = {
	resources: {
		"/hello": "helloCtrl"
	},

	custom: {
		"/custom-hello/:name": {
			"type": "get",
			"controller": "helloCtrl",
			"action": "customShow",
		}
	}

};
