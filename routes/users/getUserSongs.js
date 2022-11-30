module.exports = async (fastify, opts) => {
  fastify.get("/:id/songs", { onRequest: [fastify.authenticate] }, async (request, reply) => {
    const { id } = request.params;
    const songs = await fastify.prisma.song.findMany({
      where: { penyanyi_id: +id },
    });
    return songs;
  });
};
