"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { urlTable } from "./db/schema";

interface submitData {
  id: string;
  url: string;
  date: number;
}

export const createUrlAction = async (formData: FormData) => {
  const linkId = crypto.randomUUID().replace(/-/g, "").substring(0, 5);
  const date = Date.now();
  try {
    const url = await formData.get("url");

    await db.insert(urlTable).values({
      id: linkId as string,
      urlTo: url?.toString(),
    });
  } catch (error) {
    console.log(error);
  }

  redirect(`/${linkId}`);
};
