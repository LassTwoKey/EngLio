import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import { ICategoryItem } from "../../types/Categories";
import { isFavoritedCheck } from "../../utils/isFavoritedCheck";
import { ICard } from "../../types/Card";
import { IFavoriteCategory } from "../../types/Favorite";
import {
  setCorrectNum,
  setIsFavorited,
  setIsSumbitted
} from "../../reducers/flashCardReducer";
import { SECTIONS } from "../../data/constants";
import { useAddSectionDataMutation } from "../../api/sectionApi";
import { addItem, isMatchData } from "../../utils/flashcardData";

import styles from "./index.module.scss";

interface MainCardProps {
  cardData: ICard;
  numberOfCards: number;
  categoryId: string;
  nextClickHandler: () => void;
  memorized: IFavoriteCategory;
  failures: IFavoriteCategory;
  favorites: IFavoriteCategory;
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
    favorites,
    failures,
    memorized,
    currentNumber,
    errorSelect,
    successSelect,
    isAnswered,
    isFavorited,
    isSumbitted,
    dispatchFlashCard
  } = props;

  const [addItemData] = useAddSectionDataMutation();
  let answers = cardData?.answerOptions;

  let newitem: ICategoryItem = {
    id: cardData.id,
    text: cardData.word,
    transcription: cardData.transcription,
    translate: cardData.correctTranslate
  };

  const addToMemorizedHandler = async () => {
    nextClickHandler();
    if (!isAnswered) {
      dispatchFlashCard(setCorrectNum());
    }
    if (!memorized) return;

    const isMatch = isMatchData(memorized, categoryId, cardData.id);
    if (isMatch) return;

    addItem(addItemData, SECTIONS.memorized, categoryId, newitem);
  };
  const addToFailingsHandler = async () => {
    nextClickHandler();
    if (!failures) return;

    const isMatch = isMatchData(failures, categoryId, cardData.id);
    if (isMatch) return;

    addItem(addItemData, SECTIONS.failures, categoryId, newitem);
  };
  const addToFavoriteHandler = async () => {
    if (!favorites) return;
    dispatchFlashCard(setIsFavorited(true));

    let isSend = !isFavoritedCheck(favorites.list, cardData.id);

    const isMatch = isMatchData(favorites, categoryId, cardData.id);
    if (isMatch) return;

    if (isSend && !isSumbitted) {
      addItem(addItemData, SECTIONS.favorites, categoryId, newitem);
      dispatchFlashCard(setIsSumbitted(true));
    }
  };

  let isFavoriteActive = false;
  if (favorites?.list) {
    isFavoriteActive = isFavoritedCheck(favorites.list, cardData.id);
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
