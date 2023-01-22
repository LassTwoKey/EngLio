import React, { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import FlashCard from "../FlashCard";
import Selection from "../Selection";
import FlashCardActions from "../FlashCardActions";
import { isFavoritedCheck } from "../../utils/isFavoritedCheck";
import { ICard } from "../../types/Card";
import { IFavoriteCategory } from "../../types/Favorite";
import {
  setCorrectNum,
  setIsFavorited,
  setIsSumbitted
} from "../../reducers/flashCardReducer";
import { SECTIONS } from "../../data/constants";
import {
  useAddSectionDataMutation,
  useDelSectionDataMutation
} from "../../api/sectionApi";
import { useDelFlashcardMutation } from "../../api/flashcardApi";
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

  const [addItemData, { isLoading: isLoadingAdd }] =
    useAddSectionDataMutation();
  const [delItemData, { isLoading: isLoadingDel }] = useDelFlashcardMutation();

  const [delFromCurrentCategory] = useDelSectionDataMutation();
  let answers = cardData?.answerOptions;

  let newitem: ICard = {
    id: cardData.id,
    word: cardData.word,
    transcription: cardData.transcription,
    correctTranslate: cardData.correctTranslate,
    answerOptions: cardData.answerOptions
  };

  const addToMemorizedHandler = async () => {
    if (!isAnswered) {
      dispatchFlashCard(setCorrectNum());
    }
    if (!memorized) return;

    const isMatch = isMatchData(memorized, categoryId, cardData.id);
    if (isMatch) {
      nextClickHandler();
      return;
    }

    await addItem(addItemData, SECTIONS.memorized, categoryId, newitem);

    await delFromCurrentCategory({
      section: SECTIONS.failures,
      category: categoryId,
      id: cardData.uniqueId
    });

    await delItemData({
      category: categoryId,
      id: cardData.uniqueId
    });
    if (!isLoadingDel) {
      nextClickHandler();
    }
  };
  const addToFailingsHandler = async () => {
    // if (isSuccessDel) {
    //   nextClickHandler();
    //   e.currentTarget.disabled = false;
    // }
    // ======
    if (!failures) return;

    const isMatch = isMatchData(failures, categoryId, cardData.id);
    if (isMatch) {
      nextClickHandler();
      return;
    }

    await addItem(addItemData, SECTIONS.failures, categoryId, newitem);

    await delFromCurrentCategory({
      section: SECTIONS.memorized,
      category: categoryId,
      id: cardData.uniqueId
    });

    await delItemData({
      category: categoryId,
      id: cardData.uniqueId
    });
    if (!isLoadingDel) {
      nextClickHandler();
    }
  };
  const addToFavoriteHandler = async () => {
    if (!favorites) return;
    dispatchFlashCard(setIsFavorited(true));

    let isSend = !isFavoritedCheck(favorites.list, cardData.id);

    const isMatch = isMatchData(favorites, categoryId, cardData.id);
    if (isMatch) return;

    if (isSend && !isSumbitted) {
      await addItem(addItemData, SECTIONS.favorites, categoryId, newitem);
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
          isLoadingDel={isLoadingAdd || isLoadingDel}
        />
      </div>
    </div>
  );
};

export default MainCard;
