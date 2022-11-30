module.exports = async (fastify, opts) => {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    const song = await fastify.prisma.song.findUnique({
      where: { song_id: +id },
    });
    return song;
  });
};
