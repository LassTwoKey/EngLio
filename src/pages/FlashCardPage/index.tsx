import { FC, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import MainCard from "../../components/MainCard";
import CardResult from "../../components/CardResult";
import PageWrapper from "../../ui/PageWrapper";
import Info from "../../components/Info";
import Loader from "../../ui/Loader";
import InfoBlock from "../../ui/InfoBlock";
import NextButtonCard from "../../components/NextButtonCard";
import { COUNT_LIMIT } from "../../data/constants";
import { setExistingCards } from "../../reducers/flashCardReducer";
import {
  flashCardReducer,
  initialFlashCardState,
  setErrorSelect,
  setSuccessSelect,
  setIsAnswered,
  setIsFavorited,
  setIsSumbitted,
  setCurrentNumber
} from "../../reducers/flashCardReducer";
import { useFlashcardsQuery } from "../../api/flashcardApi";
import { useSectionDataQuery } from "../../api/sectionApi";
import { SECTIONS } from "../../data/constants";

//import styles from "./index.module.scss";

const FlashCardPage: FC = () => {
  const { id } = useParams() as { id: string };
  const [numbers, setNumbers] = useState<number>(0);

  const {
    data: pageData,
    isLoading: pageDataIsLoading,
    error: errorCards
  } = useFlashcardsQuery(id);

  const { data: memorized } = useSectionDataQuery(SECTIONS.memorized);
  const { data: failures } = useSectionDataQuery(SECTIONS.failures);
  const { data: favorites } = useSectionDataQuery(SECTIONS.favorites);

  const [flashCardState, dispatchFlashCard] = useReducer(
    flashCardReducer,
    initialFlashCardState
  );

  const nextClickHandler = () => {
    if (flashCardState.currentNumber < COUNT_LIMIT) {
      dispatchFlashCard(setCurrentNumber());
    }

    if (flashCardState.existingCards.length > 0) {
      dispatchFlashCard(
        setExistingCards(flashCardState.existingCards.slice(1))
      );
    }

    dispatchFlashCard(setErrorSelect(false));
    dispatchFlashCard(setSuccessSelect(false));
    dispatchFlashCard(setIsAnswered(false));
    dispatchFlashCard(setIsFavorited(false));
    dispatchFlashCard(setIsSumbitted(false));
  };

  let content;
  if (errorCards) {
    content = <InfoBlock type="error" title="???????????? ???????????????? :(" />;
  }

  if (pageDataIsLoading) {
    content = <Loader />;
  }

  const isLaodedAll = favorites && memorized && failures && pageData;

  if (isLaodedAll && flashCardState.existingCards && flashCardState.cards) {
    if (flashCardState.isInit && flashCardState.existingCards.length > 0) {
      content = (
        <MainCard
          numberOfCards={!!numbers ? numbers : COUNT_LIMIT}
          categoryId={id}
          //check
          memorized={memorized}
          failures={failures}
          favorites={favorites}
          // ====
          nextClickHandler={nextClickHandler}
          cardData={flashCardState.existingCards[0]}
          currentNumber={flashCardState.currentNumber}
          errorSelect={flashCardState.errorSelect}
          successSelect={flashCardState.successSelect}
          isAnswered={flashCardState.isAnswered}
          isFavorited={flashCardState.isFavorited}
          isSumbitted={flashCardState.isSumbitted}
          dispatchFlashCard={dispatchFlashCard}
        />
      );
    }
    if (flashCardState.isInit && flashCardState.existingCards.length === 0) {
      content = (
        <CardResult
          numberOfCards={!!numbers ? numbers : COUNT_LIMIT}
          numbeOfCorrect={flashCardState.correctNum}
          dispatchFlashCard={dispatchFlashCard}
        />
      );
    }

    if (flashCardState.isInit && flashCardState.cards.length === 0) {
      content = <InfoBlock type="default" title="???????????????? ???? ???????? ??????????????" />;
    }
  }

  if (
    flashCardState.isInit &&
    !flashCardState.existingCards &&
    flashCardState.cards.length === 0
  ) {
    content = <InfoBlock type="default" title="???????????????? ???? ???????? ??????????????" />;
  }

  if (!flashCardState.isInit) {
    content = (
      <Info
        type="default"
        title="???????????????? ???????????? ????????"
        text="???? ???????????????????? ?????????????? ?????????? ???????????????? ????????????????"
      />
    );
  }

  return (
    <PageWrapper className="d-flex fd-col pb-10" goBack>
      {isLaodedAll && !flashCardState.isInit && pageData && (
        <Filter
          pageData={pageData}
          memorized={memorized[id]}
          failures={failures[id]}
          dispatchFlashCard={dispatchFlashCard}
          setNumbers={setNumbers}
          isCategory={flashCardState.isCategory}
          numberOfCards={!!numbers ? numbers : COUNT_LIMIT}
        />
      )}
      {content}
      {flashCardState.isAnswered && (
        <NextButtonCard nextClickHandler={nextClickHandler} />
      )}
    </PageWrapper>
  );
};

export default FlashCardPage;
