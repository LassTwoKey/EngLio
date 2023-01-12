import { FC, useEffect } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { IRequestedCategory } from "../../types/RequestData";
import InfoBlock from "../../ui/InfoBlock";
import useHttp from "../../hooks/use-http";
import { getCategories } from "../../lib/api";

import styles from "./FlashCards.module.scss";

const FlashCards: FC = () => {
  const {
    sendRequest,
    status,
    data: flashCards,
    error
  } = useHttp(getCategories, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <PageWrapper title="Разделы для карточек">
      <div className="container pb-6">
        <div className={cn(styles.cards, "d-flex fwr-wrap")}>
          {error && <InfoBlock type="error" title="Ошибка загрузки :(" />}
          {status === "completed" &&
            flashCards &&
            (flashCards.length > 0 ? (
              flashCards.map((flashCard: IRequestedCategory) => (
                <Card
                  key={flashCard.id}
                  className={cn(styles.card, "d-flex fd-col")}
                >
                  <Typography tag="h3" className="mb-2">
                    {flashCard.title}
                  </Typography>
                  <Typography tag="p" className={cn(styles.text, "mb-3")}>
                    {flashCard.descr}
                  </Typography>
                  <div className={styles.actions}>
                    <Button type="primary" to={`${flashCard.id}`}>
                      Начать
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <InfoBlock type="default" title="Карточки не найдено" />
            ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlashCards;
