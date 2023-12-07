import prisma from "@/app/utils/prisma";
import { Question } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const quizes = await prisma.quiz.findMany({ include: { questions: true } });
    return NextResponse.json({ success: true, quizes });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Internal Server Error",
          error: e.message,
        },
        { status: 500 }
      );
    }
  }
};

export const POST = async (req: Request) => {
  try {
    const { questions } = await req.json();
    const response = await prisma.quiz.create({
      data: {
        questions: {
          create: questions.map((q: Question) => ({
            question: q.question,
            options: { set: q.options },
            correctAnswer: q.correctAnswer,
          })),
        },
      },
    });
    return NextResponse.json({
      success: true,
      message: "Quiz added.",
      quiz: response,
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Internal Server Error",
          error: e.message,
        },
        { status: 500 }
      );
    }
  }
};
