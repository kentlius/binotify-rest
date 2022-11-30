module.exports = async (fastify, opts) => {
  fastify.patch("/:id", { onRequest: [fastify.authenticate] }, async (request, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    const user = await fastify.prisma.user.update({
      where: { user_id: +id },
      data: { name: name },
    });
    return user;
  });
};
