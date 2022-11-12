const fp = require("fastify-plugin");

module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/postgres"), {
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/${process.env.DB_NAME}`,
  });
});
