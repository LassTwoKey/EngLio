import { FC } from "react";
import cn from "classnames";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

interface NextButtonProps {
  nextClickHandler: () => void;
}

const NextButtonCard: FC<NextButtonProps> = props => {
  const { nextClickHandler } = props;
  return (
    <div className="container pb-3 d-flex">
      <Button
        className={cn("d-flex mx-auto", styles.nextButton)}
        type="primary"
        onClick={nextClickHandler}
      >
        Далее
      </Button>
    </div>
  );
};

export default NextButtonCard;
