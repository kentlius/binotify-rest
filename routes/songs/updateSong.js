module.exports = async (fastify, opts) => {
  fastify.patch("/:id", { onRequest: [fastify.authenticate] }, async (request, reply) => {
    const { id } = request.params;
    const { judul, audio_path } = request.body;
    const song = await fastify.prisma.song.update({
      where: { song_id: +id },
      data: { judul: judul, audio_path: audio_path },
    });
    return song;
  });
};
