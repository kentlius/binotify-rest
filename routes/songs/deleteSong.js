module.exports = async (fastify, opts) => {
  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    const song = await fastify.prisma.song.delete({
      where: { song_id: +id },
    });
    return song;
  });
};
