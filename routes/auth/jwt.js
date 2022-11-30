const bcrypt = require("bcryptjs");

module.exports = async (fastify, opts) => {
  fastify.post("/login", async (request, reply) => {
    const { username, password } = request.body;
    const user = await fastify.prisma.user.findUnique({
      where: {
        username,
      },
    });

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return reply.code(401).send({ error: "wrong password" });
    }

    const token = fastify.jwt.sign({
      user_id: user.user_id,
      username: username,
      isadmin: user.isadmin,
    });
    reply
      .setCookie("token", token, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      })
      .code(200)
      .send({ token });
  });
};
