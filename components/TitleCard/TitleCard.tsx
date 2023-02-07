import Image from "next/image";
import styles from "./radio-group.module.scss";

export type TitleCardProps = {
  img: string;
  title: string;
};

export const TitleCard = ({ img, title }: TitleCardProps) => {
  return (
    <div className={styles["container"]}>
      <Image src={img} alt={""} height={200} width={300} />
      <p>{title}</p>
    </div>
  );
};
