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
  setExistingCards,
  setIsCategory
} from "../../reducers/flashCardReducer";
import { FILTER_ACTIONS, COUNT_LIMIT } from "../../data/constants";
import { wordCategoryFilter } from "../../utils/filters";

import styles from "./index.module.scss";

interface FilterProps {
  numberOfCards: number;
  isCategory: boolean;
  pageData: ICard[];
  memorized: ICard[] | null;
  failures: ICard[] | null;
  dispatchFlashCard: React.Dispatch<any>;
  setNumbers: React.Dispatch<React.SetStateAction<number>>;
}

const Filter: FC<FilterProps> = props => {
  const {
    dispatchFlashCard,
    pageData,
    memorized,
    failures,
    setNumbers,
    numberOfCards,
    isCategory
  } = props;
  const filters = useAppSelector(getFilters).items;
  const optns = useAppSelector(getFilters).optns;

  const [currentActive, setCurrentActive] = useState<string>("");

  const clickHandler = (value: string, action: string) => {
    dispatchFlashCard(setIsInit(true));
    setCurrentActive(value);
    if (pageData) {
      const isNotFilters =
        !(pageData.length < COUNT_LIMIT) ||
        !(FILTER_ACTIONS.byMemorize === action);

      if (isNotFilters) {
        if (pageData.length < COUNT_LIMIT) setNumbers(pageData.length);
      }

      if (FILTER_ACTIONS.byFailure === action) {
        dispatchFlashCard(setCards([]));
        if (!failures) return;

        if (failures.length < COUNT_LIMIT) {
          setNumbers(failures.length);
        } else {
          setNumbers(COUNT_LIMIT);
        }

        if (isCategory) return;

        dispatchFlashCard(setCards(failures));
        dispatchFlashCard(setExistingCards(failures));
        return;
      }
      if (FILTER_ACTIONS.byMemorize === action) {
        dispatchFlashCard(setCards([]));
        if (!memorized) return;

        if (memorized.length < COUNT_LIMIT) {
          setNumbers(memorized.length);
        } else {
          setNumbers(COUNT_LIMIT);
        }
        if (isCategory) return;

        dispatchFlashCard(setCards(memorized));

        dispatchFlashCard(setExistingCards(memorized));
        return;
      }

      if (isCategory) return;

      dispatchFlashCard(setCards(pageData));

      const currentFunc = getCurrentFilter(action);

      const sortedCards = currentFunc([...pageData], numberOfCards);

      if (sortedCards.length > 0)
        dispatchFlashCard(setExistingCards(sortedCards));
    }
  };

  const wordCategoryHandler = (min: number, max: number) => {
    dispatchFlashCard(setIsCategory(true));

    if (pageData) {
      const sorted = wordCategoryFilter(pageData, min, max);
      dispatchFlashCard(setCards(sorted));
      dispatchFlashCard(setExistingCards(sorted));
    }
    if (failures) {
      const sorted = wordCategoryFilter(failures, min, max);
      dispatchFlashCard(setCards(sorted));
      dispatchFlashCard(setExistingCards(sorted));
    }
    if (memorized) {
      const sorted = wordCategoryFilter(memorized, min, max);
      dispatchFlashCard(setCards(sorted));
      dispatchFlashCard(setExistingCards(sorted));
    }
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
        <Select onClick={wordCategoryHandler} name={"s"} optns={optns} />
      </div>
    </div>
  );
};

export default Filter;
