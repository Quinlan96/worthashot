module.exports = {
	apps: [
		{
			name: "worthashot",
			script: "./build/bin/www.js",
			node_args: "-r dotenv/config",
			env: {
				"NODE_ENV": "development",
			},
			env_production : {
				"NODE_ENV": "production"
			}
		}
	]
}