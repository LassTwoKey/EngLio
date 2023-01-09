import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import cn from "classnames";
import CardsNotFound from "../../components/CardsNotFound";
import CardsInfo from "../../components/CardsInfo";
import Filter from "../../components/Filter";
import MainCard from "../../components/MainCard";
import CardResult from "../../components/CardResult";
import PageWrapper from "../../ui/PageWrapper";
import { ICard } from "../../types/Card";

import { data as words } from "../../mock/words";
import { data as phrases } from "../../mock/phrases";
import { data as expressions } from "../../mock/expressions";
import { data as phrasalVerbs } from "../../mock/phrasal-verbs";

//import styles from "./index.module.scss";

const FlashCardPage: FC = () => {
  const { id } = useParams();

  const [isInit, setIsInit] = useState<boolean>(false);
  const [pageData, setPageData] = useState<ICard[]>([]); // tmp ...
  const [cards, setCards] = useState<ICard[]>([]);
  const [correctNum, setCorrectNum] = useState<number>(0);

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
  let content;

  if (isInit && numberOfCards === 0) {
    content = <CardsNotFound />;
  }

  if (isInit && numberOfCards > 0 && cards.length === 0) {
    content = (
      <CardResult numberOfCards={numberOfCards} numbeOfCorrect={correctNum} />
    );
  }
  if (isInit && numberOfCards > 0 && cards.length > 0) {
    content = (
      <MainCard
        cardData={cardData}
        numberOfCards={numberOfCards}
        setCards={setCards}
        setCorrectNum={setCorrectNum}
      />
    );
  }

  if (!isInit) {
    content = <CardsInfo />;
  }

  return (
    <PageWrapper goBack>
      {<Filter setIsInit={setIsInit} />}
      {content}
    </PageWrapper>
  );
};

export default FlashCardPage;
