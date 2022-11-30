module.exports = async (fastify, opts) => {
  fastify.get(
    "/:id",
    { onRequest: [fastify.authenticate], preHandler: [fastify.songPenyanyi] },
    async (request, reply) => {
      const { id } = request.params;
      const song = await fastify.prisma.song.findUnique({
        where: { song_id: +id },
      });
      return song;
    }
  );
};
