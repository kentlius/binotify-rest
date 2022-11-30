const fp = require("fastify-plugin");

module.exports = fp(async (fastify, opts) => {
  fastify.register(require("@fastify/jwt"), {
    secret: process.env.JWT_SECRET,
    cookie: {
      cookieName: "token",
      signed: false,
    },
    formatUser: function (user) {
      return {
        user_id: user.user_id,
        username: user.username,
        isadmin: user.isadmin,
      };
    },
  });

  fastify.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
