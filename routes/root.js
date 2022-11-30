module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      return `Hello, ${request.user.username} with id ${request.user.user_id}.`;
    }
  );
};
