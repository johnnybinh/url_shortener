"use server";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { createUrlAction } from "./action";

const page = () => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-3/4">
      <p className="font-bold text-xl">Enter URL to Shorten</p>
      <form
        className="w-full max-w-lg flex flex-col gap-2 items-center sm:flex-row sm:w-1/2"
        action={createUrlAction}
      >
        <Input
          name="url"
          id="url"
          type="text"
          label="Enter URL (include https://)"
          className="w-full "
        />
        <Button color="primary" type="submit" className="w-full sm:w-auto">
          Shorten
        </Button>
      </form>
    </div>
  );
};

export default page;
