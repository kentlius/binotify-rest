module.exports = async (fastify, opts) => {
  fastify.post(
    "/",
    { onRequest: [fastify.authenticate], preHandler: [fastify.userBody] },
    async (request, reply) => {
      const { judul, penyanyi_id, audio_path } = request.body;
      const song = await fastify.prisma.song.create({
        data: {
          judul,
          audio_path,
          users: {
            connect: {
              user_id: penyanyi_id,
            },
          },
        },
      });
      return song;
    }
  );
};
