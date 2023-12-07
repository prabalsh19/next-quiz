import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(req: Request) {
  const { email, password } = await req.json();
  return NextResponse.json({ message: "Hello from Next.js!" });
}
