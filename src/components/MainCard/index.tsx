import { FC, useState } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import Button from "../../ui/Button";
import { ICard } from "../../types/Card";
import { addToCategory } from "../../utils/addToCategorie";

import styles from "./index.module.scss";

interface MainCardProps {
  cardData: ICard;
  numberOfCards: number;
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
  setCorrectNum: React.Dispatch<React.SetStateAction<number>>;
  categoryId: string;
}

const MainCard: FC<MainCardProps> = props => {
  const { cardData, numberOfCards, setCards, setCorrectNum, categoryId } =
    props;

  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [errorSelect, setErrorSelect] = useState<boolean>(false);
  const [successSelect, setSuccessSelect] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  let answers = cardData?.answerOptions;

  const nextClickHandler = () => {
    if (currentNumber < numberOfCards) {
      setCurrentNumber(prevNumber => prevNumber + 1);
    }
    setCards(prevCards => prevCards.slice(1));

    setErrorSelect(false);
    setSuccessSelect(false);
    setIsAnswered(false);
  };

  const addToMemorizedHandler = () => {
    nextClickHandler();
    if (!isAnswered) setCorrectNum(prevCount => prevCount + 1);
  };
  const addToFailingsHandler = () => {
    nextClickHandler();
  };
  const addToFavoriteHandler = () => {
    //nextClickHandler();
    addToCategory(
      {
        id: cardData.id,
        text: cardData.word,
        transcription: cardData.transcription,
        translate: cardData.correctTranslate
      },
      categoryId
    );
  };
  return (
    <div className="container pb-4">
      <div className={cn(styles.learnCard, "mx-auto")}>
        <Typography tag="p" className={cn("mb-2", styles.title)}>
          {currentNumber}/{numberOfCards}
        </Typography>
        <FlashCard
          word={cardData.word}
          transcription={cardData.transcription}
          correctTranslate={cardData.correctTranslate}
          errorSelect={errorSelect}
          successSelect={successSelect}
          isAnswered={isAnswered}
        />
        <Selection
          items={answers}
          setErrorSelect={setErrorSelect}
          setSuccessSelect={setSuccessSelect}
          setIsAnswered={setIsAnswered}
          isAnswered={isAnswered}
          correctAnswer={cardData.correctTranslate}
          errorSelect={errorSelect}
          successSelect={successSelect}
          setCorrectNum={setCorrectNum}
        />
        <FlashCardActions
          onMemorized={addToMemorizedHandler}
          onFailings={addToFailingsHandler}
          onFavorite={addToFavoriteHandler}
        />
        <Button
          type="primary"
          onClick={nextClickHandler}
          className={styles.nextBtn}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default MainCard;
