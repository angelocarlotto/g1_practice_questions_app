import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient();

    const allSteps = await prisma.test.findMany({
      include: { test_name: { include: { test_names: true } } },
      orderBy: {
        orderIndex: "asc",
      },
    });

    return new Response(JSON.stringify(allSteps), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
