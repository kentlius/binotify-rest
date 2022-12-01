const bcrypt = require("bcryptjs");

module.exports = async (fastify, opts) => {
  const registerSchema = {
    schema: {
      body: {
        type: "object",
        required: ["username", "password", "email", "name"],
        properties: {
          username: { type: "string" },
          password: { type: "string" },
          email: { type: "string" },
          name: { type: "string" },
        },
      },
    },
  };

  fastify.post("/", registerSchema, async (request, reply) => {
    const { name, email, username, password } = request.body;
    const uname = await fastify.prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (uname) {
      return reply.code(409).send({ error: "username already exists" });
    }
    const emailExist = await fastify.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (emailExist) {
      return reply.code(409).send({ error: "email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await fastify.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        username: username,
      },
    });
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
