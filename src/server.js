const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async () => {
  // eslint-disable-next-line no-undef
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const server = Hapi.Server({
    port: 5000,
    host: isDevelopment ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);

};

init();