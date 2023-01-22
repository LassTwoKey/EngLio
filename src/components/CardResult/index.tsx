import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { setIsInit, setCurrentNumber } from "../../reducers/flashCardReducer";

import styles from "./index.module.scss";

interface CardResultProps {
  numberOfCards: number;
  numbeOfCorrect: number;
  dispatchFlashCard: React.Dispatch<any>;
}

const CardResult: FC<CardResultProps> = props => {
  const { numberOfCards, numbeOfCorrect, dispatchFlashCard } = props;

  return (
    <div className="container mt-6 pb-4">
      <Card className={cn("mb-2", styles.card)}>
        <Typography tag="h2" className="mb-4" isCenter>
          Результат
        </Typography>
        <Typography tag="p" className="mb-4" isCenter>
          {numbeOfCorrect}/{numberOfCards}
        </Typography>
        <div className="d-flex jc-center">
          <Button
            type="primary"
            onClick={() => {
              dispatchFlashCard(setIsInit(false));
              dispatchFlashCard(setCurrentNumber(1));
            }}
          >
            Назад
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardResult;
