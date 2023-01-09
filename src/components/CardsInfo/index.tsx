import cn from "classnames";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

const CardsInfo = () => {
  return (
    <div
      className={cn("container d-flex fd-col jc-center pb-4", styles.centered)}
    >
      <Typography tag="h2" className="mb-2" isCenter>
        Выберите фильтр слов
      </Typography>
      <Typography tag="p" isCenter>
        По выбранному фильтру будут выведены карточки
      </Typography>
    </div>
  );
};

export default CardsInfo;
