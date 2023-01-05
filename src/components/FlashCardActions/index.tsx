import { FC } from "react";
import cn from "classnames";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const FlashCardActions: FC = () => {
  return (
    <div className={cn(styles.cartAction, "mb-2 d-flex jc-center")}>
      <Button type="common" className={styles.memorized}>
        <span className="_icon-ok"></span>
      </Button>
      <Button type="common" className={styles.skip}>
        <span className="_icon-close"></span>
      </Button>
      <Button type="common" className={styles.favorite}>
        <span className="_icon-bookmark"></span>
      </Button>
    </div>
  );
};

export default FlashCardActions;
