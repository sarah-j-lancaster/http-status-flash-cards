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
      <Image src={img} alt={""} height={200} width={300} priority />
      <p className={`${spaceMono.className} ${styles.title}`}>{title}</p>
    </div>
  );
};
