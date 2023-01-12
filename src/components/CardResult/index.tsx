import { FC } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { paths } from "../../data/constants";

import styles from "./index.module.scss";

interface CardResultProps {
  numberOfCards: number;
  numbeOfCorrect: number;
}

const CardResult: FC<CardResultProps> = props => {
  const { numberOfCards, numbeOfCorrect } = props;

  const navigate = useNavigate();
  return (
    <div className="container mt-6 pb-4">
      <Card className={cn("mb-2", styles.card)}>
        <Typography tag="h2" className="mb-2" isCenter>
          Резутат
        </Typography>
        <Typography tag="p" className="mb-4" isCenter>
          {numbeOfCorrect}/{numberOfCards}
        </Typography>
        <div className="d-flex jc-center">
          <Button
            type="primary"
            onClick={() => navigate(`/${paths.flashcards}`)}
          >
            Назад
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardResult;
