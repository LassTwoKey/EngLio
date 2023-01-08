import { FC, useState } from "react";
import cn from "classnames";
import { useAppSelector } from "../../hooks/redux";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import { getFilters } from "../../redux/modules/filters/selector";
import { getCurrentFilter } from "../../utils/getCurrentFilter";

import styles from "./index.module.scss";

interface FilterProps {
  setIsInit: (state: boolean) => void;
}

const Filter: FC<FilterProps> = props => {
  const filters = useAppSelector(getFilters).items;

  const { setIsInit } = props;
  const [currentActive, setCurrentActive] = useState<string>("");
  const clickHandler = (value: string, action: string) => {
    setIsInit(true);
    setCurrentActive(value);

    const currentFilterFunc = getCurrentFilter(action);
    currentFilterFunc(/*some array*/);
  };

  return (
    <div className="container d-flex fd-col">
      <div className="d-iflex fd-col">
        <Typography
          className={cn("mb-2 d-iflex jc-center", styles.title)}
          isBig
          tag="p"
        >
          Фильтры:
        </Typography>
        <div className={cn("d-flex jc-center fwr-wrap mb-4", styles.actions)}>
          {filters.map(filter => (
            <Button
              key={filter.value}
              value={filter.value}
              onClick={() => clickHandler(filter.value, filter.action)}
              active={currentActive === filter.value}
              type="outlined"
            >
              {filter.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
