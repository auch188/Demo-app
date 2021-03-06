module.exports = {
	development: {
		db: 'neo4j://localhost/7474',
		app: {
			name: 'Facebook app'
		},
		facebook: {
			clientID: "1452232575009186",
			clientSecret: "c1efb4bf1c4cf852966450ef31667263",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		},

		google: {
			clientID: "{{PLACEHOLDER}}",
			clientSecret: "{{PLACEHOLDER}}",
			callbackURL: "{{PLACEHOLDER}}"
		}
	},
  	production: {
    	db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		app: {
			name: 'Passport Authentication Tutorial'
		},
		facebook: {
			clientID: "1452232575009186",
			clientSecret: "c1efb4bf1c4cf852966450ef31667263",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		},
		google: {
			clientID: '',
			clientSecret: '',
			callbackURL: ''
		}
 	}
}
