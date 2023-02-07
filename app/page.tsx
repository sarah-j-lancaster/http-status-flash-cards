"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [selectedStatusCodeIndex, setSelectedStatusCodeIndex] = useState<
    undefined | number
  >(undefined);

  return (
    <main className={styles.main}>
      <h1 className={inter.className}>
        Practice your recall of the HTTP status codes
      </h1>
      <RadioGroup
        radioGroupLabel={
          "Select the code which matches the description of the status code:"
        }
        radios={[500, 503, 502]}
        selectedRadioIndex={selectedStatusCodeIndex}
        onChange={(value: number) => setSelectedStatusCodeIndex(value)}
      />
    </main>
  );
};

export default Home;
