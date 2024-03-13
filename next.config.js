const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT } = require('next/constants');

module.exports = (phase) => {
	// if we are in development server
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'grant3192',
				mongodb_password: 'eGprgeS8Lamzj56s',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'my-site',
			},
		};
	}

	// if we get here we are in production server
	return {
		env: {
			mongodb_username: 'grant3192',
			mongodb_password: 'eGprgeS8Lamzj56s',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'my-site',
		},
	};
};
