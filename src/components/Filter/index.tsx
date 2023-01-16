import { FC, useState } from "react";
import cn from "classnames";
import { useAppSelector } from "../../hooks/redux";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import { getFilters } from "../../redux/modules/filters/selector";
import { getCurrentFilter } from "../../utils/getCurrentFilter";
import { ICard } from "../../types/Card";
import {
  setIsInit,
  setCards,
  setExistingCards
} from "../../reducers/flashCardReducer";

import styles from "./index.module.scss";

interface FilterProps {
  pageData: ICard[];
  dispatchFlashCard: React.Dispatch<any>;
}

const Filter: FC<FilterProps> = props => {
  const filters = useAppSelector(getFilters).items;
  const { dispatchFlashCard, pageData } = props;
  const [currentActive, setCurrentActive] = useState<string>("");

  const clickHandler = (value: string, action: string) => {
    dispatchFlashCard(setIsInit(true));
    setCurrentActive(value);

    if (pageData) {
      dispatchFlashCard(setCards(pageData));

      const currentFunc = getCurrentFilter(action);
      const sortedCards = currentFunc([...pageData]);

      if (sortedCards.length > 0)
        dispatchFlashCard(setExistingCards(sortedCards));
    }
  };

  const selectData = {
    name: "words",
    optns: [
      {
        value: "1",
        text: "100-200"
      },
      {
        value: "2",
        text: "200-300"
      },
      {
        value: "3",
        text: "300-400"
      },
      {
        value: "4",
        text: "500-1000"
      }
    ]
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
      <div className={cn("d-flex ai-center jc-center", styles.selLine)}>
        <Typography className={styles.title} isBig tag="p">
          Категории слов:
        </Typography>
        <Select name={selectData.name} optns={selectData.optns} />
      </div>
    </div>
  );
};

export default Filter;
