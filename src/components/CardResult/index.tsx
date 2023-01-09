import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";

import styles from "./index.module.scss";

interface CardResultProps {
  numberOfCards: number;
  numbeOfCorrect: number;
}

const CardResult: FC<CardResultProps> = props => {
  const { numberOfCards, numbeOfCorrect } = props;
  return (
    <div className="container mt-6 pb-4">
      <Card className={cn("mb-2", styles.card)}>
        <Typography tag="h2" className="mb-2" isCenter>
          Резутат
        </Typography>
        <Typography tag="p" isCenter>
          {numbeOfCorrect}/{numberOfCards}
        </Typography>
      </Card>
    </div>
  );
};

export default CardResult;
