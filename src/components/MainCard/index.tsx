import { FC, useState } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import Button from "../../ui/Button";
import { ICard } from "../../types/Card";
import { addToFavorite } from "../../lib/api";

import styles from "./index.module.scss";

interface MainCardProps {
  cardData: ICard;
  numberOfCards: number;
  setCorrectNum: React.Dispatch<React.SetStateAction<number>>;
  setExistingCards: React.Dispatch<React.SetStateAction<ICard[] | null>>;
  categoryId: string;
}

const MainCard: FC<MainCardProps> = props => {
  const {
    cardData,
    numberOfCards,
    setCorrectNum,
    categoryId,
    setExistingCards
  } = props;

  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [errorSelect, setErrorSelect] = useState<boolean>(false);
  const [successSelect, setSuccessSelect] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(true);

  let answers = cardData?.answerOptions;

  const nextClickHandler = () => {
    if (currentNumber < numberOfCards) {
      setCurrentNumber(prevNumber => prevNumber + 1);
    }

    setExistingCards(prevState => (prevState ? prevState.slice(1) : prevState));

    setErrorSelect(false);
    setSuccessSelect(false);
    setIsAnswered(false);
    setIsFavorite(true);
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
    if (isFavorite) {
      addToFavorite(
        {
          id: cardData.id,
          text: cardData.word,
          transcription: cardData.transcription,
          translate: cardData.correctTranslate
        },
        categoryId
      );
    }
    setIsFavorite(false);
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
          isFavorite={isFavorite}
        />
        {isAnswered && (
          <Button
            type="primary"
            onClick={nextClickHandler}
            className={styles.nextBtn}
          >
            Далее
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainCard;
