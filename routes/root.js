module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });
};
