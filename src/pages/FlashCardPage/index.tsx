import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import Filter from "../../components/Filter";
import FlashCard from "../../components/FlashCard";
import FlashCardActions from "../../components/FlashCardActions";
import Selection from "../../components/Selection";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import { ICard } from "../../types/Card";

import { data as words } from "../../mock/words";
import { data as phrases } from "../../mock/phrases";
import { data as expressions } from "../../mock/expressions";
import { data as phrasalVerbs } from "../../mock/phrasal-verbs";

import styles from "./index.module.scss";

const FlashCardPage: FC = () => {
  const { id } = useParams();

  const [isInit, setIsInit] = useState<boolean>(false);
  const [pageData, setPageData] = useState<ICard[]>([]); // tmp ...
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [errorSelect, setErrorSelect] = useState<boolean>(false);
  const [successSelect, setSuccessSelect] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  useEffect(() => {
    // imitation fetching for id ...
    switch (id) {
      case "words":
        setCards(words);
        setPageData(words);
        break;
      case "phrasal-verbs":
        setCards(phrases);
        setPageData(phrases);
        break;
      case "phrases":
        setCards(expressions);
        setPageData(expressions);
        break;
      case "expressions":
        setCards(phrasalVerbs);
        setPageData(phrasalVerbs);
        break;
      default:
        break;
    }
  }, [id]);

  let cardData: ICard = cards[0];

  let numberOfCards = pageData.length;

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
  };
  const addToFailingsHandler = () => {
    nextClickHandler();
  };
  const addToFavoriteHandler = () => {
    nextClickHandler();
  };

  let answers = cardData?.answerOptions;
  let content;

  if (isInit && numberOfCards === 0) {
    content = (
      <div
        className={cn(
          "container d-flex fd-col jc-center pb-4",
          styles.centered
        )}
      >
        <Typography tag="p" className="mb-2" isCenter>
          Карточки не найдены
        </Typography>
      </div>
    );
  }

  if (isInit && numberOfCards > 0 && cards.length > 0) {
    content = (
      <div className="container pb-4">
        <div className={cn(styles.learnCard, "mx-auto")}>
          <Typography tag="p" className={cn("mb-2", styles.title)}>
            {currentNumber}/{numberOfCards}
          </Typography>
          <FlashCard
            word={cardData.word}
            transcription={cardData.transcription}
            correctTranslate={cardData.correctTranslate}
            className={cn({
              [styles.errorBoxShadow]: errorSelect,
              [styles.successBoxShadow]: successSelect,
              [styles.showAnswer]: isAnswered
            })}
          />
          <Selection
            items={answers}
            setErrorSelect={setErrorSelect}
            setSuccessSelect={setSuccessSelect}
            setIsAnswered={setIsAnswered}
            isAnswered={isAnswered}
            className={cn({
              [styles.errorSel]: `${errorSelect}`,
              [styles.successSel]: successSelect
            })}
            correctAnswer={cardData.correctTranslate}
            errorSelect={errorSelect}
            successSelect={successSelect}
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
  }

  if (!isInit) {
    content = (
      <div
        className={cn(
          "container d-flex fd-col jc-center pb-4",
          styles.centered
        )}
      >
        <Typography tag="h2" className="mb-2" isCenter>
          Выберите фильтр слов
        </Typography>
        <Typography tag="p" isCenter>
          По выбранному фильтру будут выведены карточки
        </Typography>
      </div>
    );
  }

  return (
    <PageWrapper goBack>
      {<Filter setIsInit={setIsInit} />}
      {content}
    </PageWrapper>
  );
};

export default FlashCardPage;
