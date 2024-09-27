import { Button } from "@nextui-org/button";

import { db } from "../db";
import { urlTable } from "../db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const urlRes = await db.query.urlTable.findFirst({
    where: eq(urlTable.id, slug),
  });

  return (
    <div className="flex flex-col h-full justify-center items-center w-full gap-2 p-4">
      <h1 className="text-xl font-semibold">Code: {slug}</h1>
      <h1 className="text-lg">Destination: {urlRes?.urlTo}</h1>
      <a
        className="w-full md:w-1/4 flex justify-center items-center"
        href={urlRes?.urlTo}
      >
        <Button className="w-full md:w-1/2 h-12 md:h-16">Go To Site</Button>
      </a>
    </div>
  );
};

export default page;
