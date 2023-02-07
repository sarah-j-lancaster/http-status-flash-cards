"use client";
import { Space_Mono } from "@next/font/google";
import styles from "./page.module.scss";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import { useState } from "react";
import {
  level100Codes,
  level200Codes,
  level300Codes,
  level400Codes,
  level500Codes,
  codeLevelList,
} from "static/data";
import { TitleCard } from "@/components/TitleCard/TitleCard";

const spaceMono = Space_Mono({ weight: "400", preload: false });

const Home = () => {
  const [selectedStatusCodeIndex, setSelectedStatusCodeIndex] = useState<
    undefined | number
  >(undefined);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelection = (selectedIndex: number) => {
    setSelectedStatusCodeIndex(selectedIndex);
    setIsSelected(true);
  };

  return (
    <main className={`${styles.main} ${spaceMono.className}`}>
      <h1 className={spaceMono.className}>
        Practice your recall of the HTTP status codes
      </h1>
      <TitleCard img={level500Codes[0].url} title={level500Codes[0].title} />
      <RadioGroup
        isActive={!isSelected}
        radioGroupLabel={"Select the code which matches the description:"}
        radios={[500, 503, 502]}
        selectedRadioIndex={selectedStatusCodeIndex}
        onChange={(selectedIndex: number) => handleSelection(selectedIndex)}
      />
    </main>
  );
};

export default Home;
