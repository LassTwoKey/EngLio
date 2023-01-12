import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import cn from "classnames";
import Filter from "../../components/Filter";
import MainCard from "../../components/MainCard";
import CardResult from "../../components/CardResult";
import PageWrapper from "../../ui/PageWrapper";
import Info from "../../components/Info";
import Loader from "../../ui/Loader";
import InfoBlock from "../../ui/InfoBlock";
import useHttp from "../../hooks/use-http";
import { ICard } from "../../types/Card";
import { getCards } from "../../lib/api";
import { COUNT_LIMIT } from "../../data/constants";

//import styles from "./index.module.scss";

const FlashCardPage: FC = () => {
  const { id } = useParams<string>();

  const {
    sendRequest,
    status,
    data: pageData,
    error
  } = useHttp(getCards, true);

  const [isInit, setIsInit] = useState<boolean>(false);
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [existingCards, setExistingCards] = useState<ICard[] | null>(null);
  const [correctNum, setCorrectNum] = useState<number>(0);
  useEffect(() => {
    if (id) sendRequest(id);
  }, [id, sendRequest]);

  if (!id) return null;

  let content;
  if (error) {
    content = <InfoBlock type="error" title="Ошибка загрузки :(" />;
  }

  if (status === "pending") {
    content = <Loader />;
  }

  if (existingCards && cards) {
    if (isInit && existingCards.length > 0) {
      content = (
        <MainCard
          cardData={existingCards[0]}
          numberOfCards={COUNT_LIMIT}
          setExistingCards={setExistingCards}
          setCorrectNum={setCorrectNum}
          categoryId={id}
        />
      );
    }
    if (isInit && existingCards.length === 0) {
      content = (
        <CardResult numberOfCards={COUNT_LIMIT} numbeOfCorrect={correctNum} />
      );
    }
    if (isInit && cards.length === 0) {
      content = <InfoBlock type="default" title="Карточки не были найдены" />;
    }
  }

  if (!isInit) {
    content = (
      <Info
        type="default"
        title="Выберите фильтр слов"
        text="По выбранному фильтру будут выведены карточки"
      />
    );
  }

  return (
    <PageWrapper goBack>
      {
        <Filter
          setIsInit={setIsInit}
          pageData={pageData}
          setCards={setCards}
          setExistingCards={setExistingCards}
        />
      }
      {content}
    </PageWrapper>
  );
};

export default FlashCardPage;
