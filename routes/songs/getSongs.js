module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const songs = await fastify.prisma.song.findMany();
    return songs;
  });
};
