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
    const { username, password, email, name } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await fastify.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        username: username,
      },
    });
    return user;
  });
};
