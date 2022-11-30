module.exports = async (fastify, opts) => {
  fastify.delete(
    "/:id",
    { onRequest: [fastify.authenticate], preHandler: [fastify.isadmin] },
    async (request, reply) => {
      const { id } = request.params;
      const user = await fastify.prisma.user.delete({
        where: {
          user_id: +id,
        },
      });
      return user;
    }
  );
};
