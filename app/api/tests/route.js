import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });

    const allSteps = await prisma.test.findMany({
      orderBy: {
        orderindex: "asc",
      },
    });

    return new Response(JSON.stringify(allSteps), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
