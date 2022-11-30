module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    { onRequest: [fastify.authenticate], preHandler: [fastify.isadmin] },
    async (request, reply) => {
      const songs = await fastify.prisma.song.findMany();
      return songs;
    }
  );
};
