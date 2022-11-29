module.exports = async (fastify, opts) => {
  fastify.get("/:id/songs", async (request, reply) => {
    const { id } = request.params;
    const songs = await fastify.prisma.song.findMany({
      where: { penyanyi_id: +id },
    });
    return songs;
  });
};
