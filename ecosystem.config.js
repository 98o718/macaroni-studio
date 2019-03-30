module.exports = {
  apps: [
    {
      name: 'macaroni',
      script: './server.js',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
};
