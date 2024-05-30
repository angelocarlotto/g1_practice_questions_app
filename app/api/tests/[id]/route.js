import { PrismaClient } from "@prisma/client";
export const GET = async (req, { params }) => {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const id = parseInt(params.id);
    const prompts = await prisma.test.findUnique({
      include: {
        test_question: {
          include: {
            question: {
              include: { question_answer: { include: { answer: true } } },
            },
          },
        },
      },
      where: {
        id: id,
      },
    });
    if (!prompts) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
