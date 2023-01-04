import { FC } from "react";
import cn from "classnames";
import { IBaseUI } from "../../types/ComponentUI";

import styles from "./index.module.scss";

const Card: FC<IBaseUI> = ({ children, className }: any) => {
  const classes = cn(styles.card, className, "p-4");
  return <div className={classes}>{children}</div>;
};

export default Card;
