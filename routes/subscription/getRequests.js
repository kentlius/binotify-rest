module.exports = async (fastify, opts) => {
    fastify.get(
      "/",
      { onRequest: [fastify.authenticate], preHandler: [fastify.isadmin] },
      async (request, reply) => {
        var subscriptionsReq = {
            res:[
                {
                    "subscriber_id": 1,
                    "creator_id": 2,
                },
                {
                    "subscriber_id": 1,
                    "creator_id": 1,
                },
                {
                    "subscriber_id": 1,
                    "creator_id": 2,
                }
            ]
        }

        for (let index = 0; index < subscriptionsReq.res.length; index++) {
            const creator = await fastify.prisma.user.findUnique({
                where: {
                    user_id: subscriptionsReq.res[index].creator_id,
                },
                select: {
                    name: true,
                },
            });
            subscriptionsReq.res[index].creator_name = creator.name;
        }
        
        return subscriptionsReq;
      }
    );
  };