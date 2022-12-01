module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      return ({user:request.user.username}) ;
    }
  );
};
