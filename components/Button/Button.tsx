import styles from "./button.module.scss";

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className={styles.button}>
    {label}
  </button>
);
