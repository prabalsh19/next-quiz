import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  return NextResponse.json({ message: "Hello from Next.js!" });
}
