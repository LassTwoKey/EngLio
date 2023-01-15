import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import { ICategoryItem } from "../../types/RequestData";
import { addToFavorite } from "../../lib/api";
import { isFavoritedCheck } from "../../utils/isFavoritedCheck";
import { ICard } from "../../types/Card";
import { IFavoriteCategory } from "../../types/RequestData";
import { setCorrectNum, setIsFavorited } from "../../reducers/flashCardReducer";

import styles from "./index.module.scss";

interface MainCardProps {
  cardData: ICard;
  numberOfCards: number;
  categoryId: string;
  nextClickHandler: () => void;
  favoriteItems: IFavoriteCategory;
  error: string;
  currentNumber: number;
  errorSelect: boolean;
  successSelect: boolean;
  isAnswered: boolean;
  isFavorited: boolean;
  isSumbitted: boolean;
  dispatchFlashCard: React.Dispatch<any>;
}

const MainCard: FC<MainCardProps> = props => {
  const {
    cardData,
    numberOfCards,
    categoryId,
    nextClickHandler,
    favoriteItems,
    error,
    currentNumber,
    errorSelect,
    successSelect,
    isAnswered,
    isFavorited,
    isSumbitted,
    dispatchFlashCard
  } = props;

  let answers = cardData?.answerOptions;

  const addToMemorizedHandler = () => {
    nextClickHandler();
    if (!isAnswered) {
      dispatchFlashCard(setCorrectNum());
    }
  };
  const addToFailingsHandler = () => {
    nextClickHandler();
  };
  const addToFavoriteHandler = () => {
    dispatchFlashCard(setIsFavorited(true));
    let newitem: ICategoryItem = {
      id: cardData.id,
      text: cardData.word,
      transcription: cardData.transcription,
      translate: cardData.correctTranslate
    };

    let isSend = !isFavoritedCheck(favoriteItems.list, cardData.id);

    if (isSend && !isSumbitted) {
      addToFavorite(newitem, categoryId);
      dispatchFlashCard(setIsFavorited(true));
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
    <div className={cn("container pb-4", styles.contLearnCard)}>
      <div className={cn("mx-auto f-flex", styles.learnCard)}>
        <div className={cn("pt-1 pb-1 pr-2 pl-2 mb-4 d-iflex", styles.counter)}>
          <Typography tag="p" className={cn(styles.title)}>
            {currentNumber}/{numberOfCards}
          </Typography>
        </div>
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
          isAnswered={isAnswered}
          correctAnswer={cardData.correctTranslate}
          errorSelect={errorSelect}
          successSelect={successSelect}
          dispatchFlashCard={dispatchFlashCard}
        />
        <FlashCardActions
          onMemorized={addToMemorizedHandler}
          onFailings={addToFailingsHandler}
          onFavorite={addToFavoriteHandler}
          isFavorite={isFavoriteActive}
        />
      </div>
    </div>
  );
};

export default MainCard;
