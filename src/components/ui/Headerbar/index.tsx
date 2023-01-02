import Button from "../Button";
import cn from "classnames";

import styles from "./index.module.scss";

const Headerbar = () => {
  return (
    <div className={cn("d-flex ai-center")}>
      <Button
        className={styles.notification}
        icon="_icon-notification"
        type="light"
      ></Button>
      <Button
        className={styles.account}
        icon="_icon-account"
        type="light"
      ></Button>
    </div>
  );
};

export default Headerbar;
