"use client";
import styles from "./radio-group.module.scss";

export type RadioGroupProps = {
  radioGroupLabel: string;
  isActive: boolean;
  radios: number[];
  selectedRadioIndex: number | undefined;
  onChange: (value: number) => void;
};

export const RadioGroup = ({
  radios,
  radioGroupLabel,
  selectedRadioIndex,
  isActive,
  onChange,
}: RadioGroupProps) => {
  const radioButtons = radios.map((radio, index) => (
    <div className="radio" key={`radio-${radio}`}>
      <div className={styles["card"]}>
        <input
          className={styles["radio-input"]}
          value={radio}
          type="radio"
          id={`radio-${index}`}
          checked={index === selectedRadioIndex}
          onChange={isActive ? () => onChange(index) : undefined}
        />
        <label htmlFor={`radio-${index}`} className={styles["label"]}>
          {radio}
        </label>
      </div>
    </div>
  ));

  return (
    <>
      <fieldset className={styles["radio-group"]}>
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
