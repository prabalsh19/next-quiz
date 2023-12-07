import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exist.",
        },
        { status: 404 }
      );
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect Password",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!
    );

    const { password: _, ...rest } = user;

    const userInfo = rest;
    return NextResponse.json({
      success: true,
      message: "Loggedin successfully",
      token,
      userInfo,
    });
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
}
