"use client";
import styles from "./radio-group.module.scss";
import { Inter } from "@next/font/google";

export type RadioGroupProps = {
  radioGroupLabel: string;
  radios: number[];
  selectedRadioIndex: number | undefined;
  onChange: (value: number) => void;
};

const inter = Inter({ subsets: ["latin"] });

export const RadioGroup = ({
  radios,
  radioGroupLabel,
  selectedRadioIndex,
  onChange,
}: RadioGroupProps) => {
  const radioButtons = radios.map((radio, index) => (
    <div className="radio">
      <div className={styles["card"]}>
        <input
          className={styles["radio-input"]}
          value={radio}
          type="radio"
          id={`radio-${index}`}
          checked={index === selectedRadioIndex}
          onChange={() => onChange(index)}
        />
        <label htmlFor={`radio-${index}`} className={styles["label"]}>
          {radio}
        </label>
      </div>
    </div>
  ));

  return (
    <>
      <fieldset className={inter["className"]}>
        <legend id={"radio-group"} className={styles["radio-group-label"]}>
          <span>{radioGroupLabel}</span>
        </legend>
        <div
          role="group"
          aria-labelledby={"radio-group"}
          className={styles["radio-group-container"]}
        >
          {radioButtons}
        </div>
      </fieldset>
    </>
  );
};
