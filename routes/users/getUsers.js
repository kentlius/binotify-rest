module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    async (request, reply) => {
      const users = await fastify.prisma.user.findMany({
        where:{
          isadmin: false,
        },
        select: {
          user_id: true,
          name: true,
        },
      });
      return users;
    }
  );
};
