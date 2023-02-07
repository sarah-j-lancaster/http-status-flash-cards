"use client";
import { getAllLevels } from "@/utils/utils";
import { useEffect } from "react";

export default function Head() {
  const allData = getAllLevels();
  useEffect(() => {
    const head = document.getElementById("head");
    allData.forEach((code) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "prefetch");
      link.setAttribute("href", code.url);
      link.setAttribute("as", "image");
      head?.appendChild(link);
    });
  }, []);

  return (
    <>
      <title>HTTP Status Code Flash Card App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="HTTP status code flash card app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
