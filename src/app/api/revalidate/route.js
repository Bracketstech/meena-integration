import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  if (
    request.nextUrl.searchParams.get("secret") !== process.env.MY_SECRET_TOKEN
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const path = request.nextUrl.searchParams.get("path");
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
