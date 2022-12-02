module.exports = async (fastify, opts) => {
  fastify.get(
    "/:id",
    // { onRequest: [fastify.authenticate], preHandler: [fastify.isadmin] },
    async (request, reply) => {
      const { id } = request.params;
      const user = await fastify.prisma.user.findUnique({
        where: {
          user_id: +id,
        },
      });
      return user;
    }
  );
};
