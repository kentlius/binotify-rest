module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    { onRequest: [fastify.authenticate], preHandler: [fastify.isadmin] },
    async (request, reply) => {
      const users = await fastify.prisma.user.findMany();
      return users;
    }
  );
};
