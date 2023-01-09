import cn from "classnames";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

const CardsNotFound = () => {
  return (
    <div
      className={cn("container d-flex fd-col jc-center pb-4", styles.centered)}
    >
      <Typography tag="p" className="mb-2" isCenter>
        Карточки не найдены
      </Typography>
    </div>
  );
};

export default CardsNotFound;
