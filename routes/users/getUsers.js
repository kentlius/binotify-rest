module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const { rows } = await fastify.pg.query("SELECT * FROM users");
    return rows;
  });
};
