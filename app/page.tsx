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
            isActive={selectedStatusCodeIndex === undefined}
            radioGroupLabel={"Select the code which matches the description:"}
            radios={statusCodeTestGroup.shuffledCodes}
            selectedRadioIndex={selectedStatusCodeIndex}
            onChange={(selectedIndex: number) => handleSelection(selectedIndex)}
          />
          {selectedStatusCodeIndex !== undefined && (
            <div className={styles.answers}>
              {statusCodeTestGroup.shuffledCodes[selectedStatusCodeIndex] ===
              statusCodeTestGroup.testCode.statusCode ? (
                <p className={spaceMonoBold.className}>CORRECT!</p>
              ) : (
                <div>
                  <span className={spaceMonoBold.className}>INCORRECT</span>
                  <span>{`- The answer is ${statusCodeTestGroup.testCode.statusCode}`}</span>{" "}
                </div>
              )}

              <Button label="Next" onClick={resetSelection} />
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
