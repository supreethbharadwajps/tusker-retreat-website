import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Lead received:", data);

  // Here integrate with Resend, SendGrid, or database
  // For demo we just log and respond success

  return NextResponse.json({ success: true });
}