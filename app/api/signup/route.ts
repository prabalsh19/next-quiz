import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const { firstName, lastName, email, password } = await req.json();
    const user = await prisma.user.findFirst({ where: { email } });

    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists.",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: { firstName, lastName, email, password: hashedPassword },
    });

    const token = jwt.sign(
      { id: createdUser.id, role: createdUser.role },
      process.env.JWT_SECRET!
    );

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        createdUser,
        token,
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: e,
      },
      { status: 500 }
    );
  }
};
