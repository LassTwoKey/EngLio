import cn from "classnames";

import styles from "./index.module.scss";

const Card = ({ children, className }: any) => {
  const classes = cn(styles.card, className, "p-4");
  return <div className={classes}>{children}</div>;
};

export default Card;
