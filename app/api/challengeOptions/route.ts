import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { challengeOptions } from "@/db/schema";

export const GET = async () => {
  const isUserAdmin = await isAdmin();

  if (!isUserAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const data = await db.query.challengeOptions.findMany();

  return NextResponse.json(data);
};

export const POST = async (request: Request) => {
  const isUserAdmin = await isAdmin();

  if (!isUserAdmin) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = await request.json();

  const data = await db
    .insert(challengeOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
