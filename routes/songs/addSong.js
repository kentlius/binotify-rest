module.exports = async (fastify, opts) => {
  fastify.post(
    "/",
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      const { judul, audio_path } = request.body;
      const song = await fastify.prisma.song.create({
        data: {
          judul,
          audio_path,
          users: {
            connect: {
              user_id: request.user.user_id,
            },
          },
        },
      });
      return song;
    }
  );
};
