module.exports = {
  apps: [{
  name: 'react-pj',
  watch: true,
  ignore_watch: ["node_modules/*", "public/*", "routes/*", "views/*"],
  script: './server/server.js',
  instances: 1, 	// process
  exec_mode: 'fork',
  env: {
	  "PORT": 3001,
	  "NODE_ENV": "development"
  },
  env_production: {
	  "PORT": 3001,
	  "NODE_ENV": "production"
  }
  }
   ]
}

// pm2 start react-pj.js