module.exports = async (fastify, opts) => {
  fastify.post("/logout", async (request, reply) => {
    reply
      .clearCookie("token", { path: "/" })
      .code(200)
      .send({ message: "logged out" });
  });
};
