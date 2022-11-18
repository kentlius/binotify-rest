module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const users = await fastify.prisma.user.findMany();
    return users;
  });
};
