import { FC } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { data } from "../../mock/categories";

import styles from "./FlashCards.module.scss";

const FlashCards: FC = () => {
  const flashCards = data;
  return (
    <PageWrapper title="Разделы для карточек">
      <div className="container pb-6">
        <div className={cn(styles.cards, "d-flex fwr-wrap")}>
          {flashCards.map(flashCard => (
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
                <Button
                  type="primary"
                  to={`${flashCard.id}`}
                  state={{ id: flashCard.id }}
                >
                  Начать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlashCards;
