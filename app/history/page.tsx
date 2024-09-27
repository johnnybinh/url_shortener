import React from "react";
import { db } from "../db";
import { urlTable } from "../db/schema";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const page = async () => {
  const allLink = await db.select().from(urlTable);

  const tableStyle = "border-2 px-8 py-2";

  return (
    <div className="flex justify-center items-center flex-col h-full gap-2">
      <h1 className="font-bold text-2xl">History</h1>
      <table className="border-white border-2">
        <tbody>
          <tr className="border-2">
            <th className={tableStyle}>ID</th>
            <th className={tableStyle}>destination</th>
            <th className={tableStyle}>Time Created</th>
            <th className={tableStyle}>View</th>
          </tr>
          {allLink.map((link, index) => (
            <tr key={index}>
              <td className={tableStyle}>{link.id}</td>
              <td className={tableStyle}>{link.urlTo}</td>
              <td className={tableStyle}>{link.timestamp}</td>
              <td className={tableStyle}>
                <Button>
                  <Link href={`/${link.id}`}>View Details</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
