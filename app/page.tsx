"use client";
import _ from "lodash";
import { Space_Mono } from "@next/font/google";
import styles from "./page.module.scss";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import { useEffect, useState } from "react";
import { TitleCard } from "@/components/TitleCard/TitleCard";
import { getStatusCodes, StatusCodeTestGroup } from "@/utils/utils";

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

  const resetSelection = () => {
    setSelectedStatusCodeIndex(undefined);
    setIsSelected(false);
  };

  const [statusCodeTestGroup, setStatusCodeTestGroup] = useState<
    StatusCodeTestGroup | undefined
  >(undefined);

  useEffect(() => {
    const statusCodes = getStatusCodes();
    setStatusCodeTestGroup(statusCodes);
  }, []);

  return (
    <main className={`${styles.main} ${spaceMono.className}`}>
      <h1 className={spaceMono.className}>
        Practice your recall of the HTTP status codes
      </h1>
      {statusCodeTestGroup && (
        <>
          <TitleCard
            img={statusCodeTestGroup.testCode.url}
            title={statusCodeTestGroup.testCode.title}
          />
          <RadioGroup
            isActive={!isSelected}
            radioGroupLabel={"Select the code which matches the description:"}
            radios={statusCodeTestGroup.shuffledCodes}
            selectedRadioIndex={selectedStatusCodeIndex}
            onChange={(selectedIndex: number) => handleSelection(selectedIndex)}
          />
        </>
      )}
    </main>
  );
};

export default Home;
