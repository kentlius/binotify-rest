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
      username: username,
      isadmin: user.isadmin,
    });
    // return { token };
    reply
      .setCookie("token", token, {
        domain: "localhost",
        path: "/",
        secure: false,
        httpOnly: true,
        sameSite: true,
      })
      .code(200)
      .send("Cookie sent");
  });
};
