"use client";
import _ from "lodash";
import { Space_Mono } from "@next/font/google";
import styles from "./page.module.scss";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import { useEffect, useState } from "react";
import { TitleCard } from "@/components/TitleCard/TitleCard";
import { getStatusCodes, StatusCodeTestGroup } from "@/utils/utils";
import { Button } from "@/components/Button/Button";

const spaceMono = Space_Mono({ weight: "400", preload: false });
const spaceMonoBold = Space_Mono({ weight: "700", preload: false });

const Home = () => {
  const [selectedStatusCodeIndex, setSelectedStatusCodeIndex] = useState<
    undefined | number
  >(undefined);

  const handleSelection = (selectedIndex: number) => {
    setSelectedStatusCodeIndex(selectedIndex);
  };

  const resetSelection = () => {
    setSelectedStatusCodeIndex(undefined);
    const statusCodes = getStatusCodes();
    setStatusCodeTestGroup(statusCodes);
  };

  const [statusCodeTestGroup, setStatusCodeTestGroup] = useState<
    StatusCodeTestGroup | undefined
  >(undefined);

  useEffect(() => {
    const statusCodes = getStatusCodes();
    setStatusCodeTestGroup(statusCodes);
  }, []);

  const renderAnswerSection = (
    selectedIndex: number,
    group: StatusCodeTestGroup
  ) => {
    const isCorrect =
      group.shuffledCodes[selectedIndex] === group.testCode.statusCode;

    const correctElement = <p className={spaceMonoBold.className}>CORRECT!</p>;
    const incorrectElement = (
      <div className={styles.incorrect}>
        <span className={spaceMonoBold.className}>INCORRECT</span>
        <span>{` - The answer is ${group.testCode.statusCode}`}</span>
      </div>
    );
    return (
      <>
        {isCorrect ? correctElement : incorrectElement}
        <Button label="Next" onClick={resetSelection} />
      </>
    );
  };

  return (
    <main className={`${styles.main} ${spaceMono.className}`}>
      <h1 className={styles.title}>
        Practice your recall of the HTTP status codes
      </h1>
      {statusCodeTestGroup && (
        <>
          <TitleCard
            img={statusCodeTestGroup.testCode.url}
            title={statusCodeTestGroup.testCode.title}
          />
          <RadioGroup
            isActive={selectedStatusCodeIndex === undefined}
            radioGroupLabel={"Select the code which matches the description:"}
            radios={statusCodeTestGroup.shuffledCodes}
            selectedRadioIndex={selectedStatusCodeIndex}
            onChange={(selectedIndex: number) => handleSelection(selectedIndex)}
          />
          {selectedStatusCodeIndex !== undefined && (
            <>
              {renderAnswerSection(
                selectedStatusCodeIndex,
                statusCodeTestGroup
              )}
            </>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
