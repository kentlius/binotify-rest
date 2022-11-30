const fp = require("fastify-plugin");

module.exports = fp(async (fastify, opts) => {
  fastify.decorate("isadmin", async (request, reply) => {
    if (request.user.isadmin) {
      return;
    } else {
      reply.status(401).send({ message: "Unauthorized" });
    }
  });

  fastify.decorate("userParam", async (request, reply) => {
    if (request.user.user_id == request.params.id) {
      return;
    } else {
      reply.status(401).send({ message: "Unauthorized" });
    }
  });

  fastify.decorate("userBody", async (request, reply) => {
    if (request.user.user_id == request.body.penyanyi_id) {
      return;
    } else {
      reply.status(401).send({ message: "Unauthorized" });
    }
  });

  fastify.decorate("songPenyanyi", async (request, reply) => {
    const { id } = request.params;
    const song = await fastify.prisma.song.findUnique({
      where: { song_id: +id },
    });
    if (request.user.user_id == song.penyanyi_id) {
      return;
    } else {
      reply.status(401).send({ message: "Unauthorized" });
    }
  });
});
