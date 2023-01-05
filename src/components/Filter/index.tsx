import { FC, useState } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

interface FilterProps {
  setIsInit: (state: boolean) => void;
}

const filters = [
  " По порядку",
  "Смешанные",
  "Задом наперед",
  "Выученные",
  "Сложные"
];

const Filter: FC<FilterProps> = props => {
  const { setIsInit } = props;
  const [currentActive, setCurrentActive] = useState<string>("");
  const clickHandler = (value: string) => {
    setIsInit(true);
    setCurrentActive(value);
  };
  return (
    <div className="container d-flex fd-col">
      <div className="d-iflex fd-col">
        <Typography className="mb-2 d-iflex jc-center" isBig tag="p">
          Фильтры:
        </Typography>
        <div className={cn("d-flex jc-center fwr-wrap mb-4", styles.actions)}>
          {filters.map(filter => (
            <Button
              key={filter}
              value={filter}
              onClick={() => clickHandler(filter)}
              active={currentActive === filter}
              type="outlined"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
