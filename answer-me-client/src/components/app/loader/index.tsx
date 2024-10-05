import { useEffect, useState } from "react";
import s from "./index.module.css";

interface Props {
  color: string;
  size: "sm" | "md" | "lg";
}
export const Loader = ({ color, size }: Props) => {
  const [styles, setStyles] = useState({});
  useEffect(() => {
    let loaderSize;
    switch (size) {
      case "sm":
        loaderSize = 20;
        break;
      case "md":
        loaderSize = 40;
        break;
      case "lg":
        loaderSize = 60;
        break;
      default:
        loaderSize = 40;
    }
    const newStyles = {
      border: `3px solid ${color}`,
      width: `${loaderSize}px`,
      height: `${loaderSize}px`,
      borderTopColor: "transparent",
    };
    setStyles(newStyles);
  }, [color]);
  return <span className={s.loader} style={styles}></span>;
};
