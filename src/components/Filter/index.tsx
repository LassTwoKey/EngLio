import { FC, useState } from "react";
import cn from "classnames";
import { useAppSelector } from "../../hooks/redux";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import { getFilters } from "../../redux/modules/filters/selector";
import { getCurrentFilter } from "../../utils/getCurrentFilter";
import { ICard } from "../../types/Card";
import { ActionKind } from "../../data/enums";

import styles from "./index.module.scss";

interface FilterProps {
  // setIsInit: (state: boolean) => void;
  pageData: ICard[];
  // setCards: React.Dispatch<React.SetStateAction<ICard[] | null>>;
  // setExistingCards: React.Dispatch<React.SetStateAction<ICard[] | null>>;
  dispatchFlashCard: React.Dispatch<any>;
}

const Filter: FC<FilterProps> = props => {
  const filters = useAppSelector(getFilters).items;

  // const { setIsInit, pageData, setCards, setExistingCards, dispatchFlashCard } =
  //   props;
  const { dispatchFlashCard, pageData } = props;
  const [currentActive, setCurrentActive] = useState<string>("");
  const clickHandler = (value: string, action: string) => {
    //setIsInit(true);
    dispatchFlashCard({ type: ActionKind.SetIsInit, payload: true });
    setCurrentActive(value);

    if (pageData) {
      //setCards(pageData);
      dispatchFlashCard({ type: ActionKind.SetCards, payload: pageData });

      const currentFunc = getCurrentFilter(action);
      const sortedCards = currentFunc([...pageData]);

      //setExistingCards(sortedCards);
      dispatchFlashCard({
        type: ActionKind.SetExistingCards,
        payload: sortedCards
      });
    }
  };

  // const clickHandler1 = (value: string, action: string) => {
  //   dispatchFlashCard({ type: ActionKind.SetIsInit, payload: false });
  //   setCurrentActive(value);

  //   if (pageData) {
  //     dispatchFlashCard({ type: ActionKind.SetCards, payload: pageData });

  //     const currentFunc = getCurrentFilter(action);
  //     const sortedCards = currentFunc([...pageData]);

  //     dispatchFlashCard({
  //       type: ActionKind.SetExistingCards,
  //       payload: sortedCards
  //     });
  //   }
  // };

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
