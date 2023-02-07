import Image from "next/image";
import styles from "./title-card.module.scss";
import { Space_Mono } from "@next/font/google";

const spaceMono = Space_Mono({ weight: "700", preload: false });

export type TitleCardProps = {
  img: string;
  title: string;
};

export const TitleCard = ({ img, title }: TitleCardProps) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={""} className={styles.image} />
      <p className={`${spaceMono.className} ${styles.title}`}>{title}</p>
    </div>
  );
};
