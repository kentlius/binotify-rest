const fp = require("fastify-plugin");
// const Remote = require('../util/remote')
const soap = require("soap");

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

  fastify.decorate("isSubscribed", async (request, reply) => {
    const { creator_id, subscriber_id } = request.params;
    const args = { creator_id: creator_id, subscriber_id: subscriber_id };
    const url = "http://localhost:8000/subscription?wsdl";

    soap.createClient(url, {}, function (err, client) {
      // client.MyFunction(args, function (err, result) {
      //   console.log(result);
      // });
      console.log(client);
    });
  });
});
