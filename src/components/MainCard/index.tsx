import { FC, useEffect, useState } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import Button from "../../ui/Button";
import useHttp from "../../hooks/use-http";
import { ICard } from "../../types/Card";
import { ICategoryItem } from "../../types/RequestData";
import { addToFavorite, getFavoritesByCategory } from "../../lib/api";
import { isFavoritedCheck } from "../../utils/isFavoritedCheck";

import styles from "./index.module.scss";

interface MainCardProps {
  cardData: ICard;
  numberOfCards: number;
  setCorrectNum: React.Dispatch<React.SetStateAction<number>>;
  setExistingCards: React.Dispatch<React.SetStateAction<ICard[] | null>>;
  categoryId: string;
  backToFilters?: React.ReactNode;
}

const MainCard: FC<MainCardProps> = props => {
  const {
    cardData,
    numberOfCards,
    setCorrectNum,
    categoryId,
    setExistingCards,
    backToFilters
  } = props;
  const {
    sendRequest,
    //status,
    data: favoriteItems,
    error
  } = useHttp(getFavoritesByCategory, true);

  useEffect(() => {
    sendRequest(categoryId);
  }, [sendRequest, categoryId]);

  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [errorSelect, setErrorSelect] = useState<boolean>(false);
  const [successSelect, setSuccessSelect] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isSumbitted, setIsSumbitted] = useState<boolean>(false);

  let answers = cardData?.answerOptions;

  const nextClickHandler = () => {
    if (currentNumber < numberOfCards) {
      setCurrentNumber(prevNumber => prevNumber + 1);
    }

    setExistingCards(prevState => (prevState ? prevState.slice(1) : prevState));

    setErrorSelect(false);
    setSuccessSelect(false);
    setIsAnswered(false);
    setIsFavorited(false);
    setIsSumbitted(false);
  };

  const addToMemorizedHandler = () => {
    nextClickHandler();
    if (!isAnswered) setCorrectNum(prevCount => prevCount + 1);
  };
  const addToFailingsHandler = () => {
    nextClickHandler();
  };
  const addToFavoriteHandler = () => {
    setIsFavorited(true);
    let newitem: ICategoryItem = {
      id: cardData.id,
      text: cardData.word,
      transcription: cardData.transcription,
      translate: cardData.correctTranslate
    };

    let isSend = !isFavoritedCheck(favoriteItems.list, cardData.id);

    if (isSend && !isSumbitted) {
      addToFavorite(newitem, categoryId);
      setIsSumbitted(true);
    }
    if (error) {
      console.log("Items loading error");
    }
  };

  let isFavoriteActive = false;
  if (favoriteItems?.list) {
    isFavoriteActive = isFavoritedCheck(favoriteItems.list, cardData.id);
  }
  if (isFavorited) {
    isFavoriteActive = isFavorited;
  }

  return (
    <div className="container pb-4">
      {backToFilters}
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
          isFavorite={isFavoriteActive}
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
