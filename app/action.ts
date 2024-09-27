"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { urlTable } from "./db/schema";
import QRCode from "qrcode";

interface submitData {
  id: string;
  url: string;
  date: number;
}

const generateQR = async (text: any) => {
  try {
    //console.log(await QRCode.toDataURL(text));
    return QRCode.toDataURL(text)
  } catch (err) {
    console.error(err);
  }
};

export const createUrlAction = async (formData: FormData) => {
  const linkId = crypto.randomUUID().replace(/-/g, "").substring(0, 5);
  const date = Date.now();
  try {
    const url = await formData.get("url");

     const base64Url = await generateQR(`${process.env.PRODUCTION_DOMAIN}/${linkId}`);

    await db.insert(urlTable).values({
      id: linkId as string,
      urlTo: url?.toString(),
      qrBase64:base64Url,
    });
  } catch (error) {
    console.log(error);
  }

  redirect(`/${linkId}`);
};
