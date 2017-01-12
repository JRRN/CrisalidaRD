var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'crisalidard'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/crisalidard-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'crisalidard'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/crisalidard-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'crisalidard'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/crisalidard-production'
  }
};

module.exports = config[env];
