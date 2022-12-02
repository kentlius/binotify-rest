module.exports = async (fastify, opts) => {
  fastify.get(
    "/:creator_id/songs/:subscriber_id",
    { preHandler: [fastify.isSubscribed] },
    async (request, reply) => {
      const { creator_id } = request.params;
      const songs = await fastify.prisma.song.findMany({
        where: { penyanyi_id: +creator_id },
      });
      return songs;
    }
  );
};
