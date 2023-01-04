import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

import styles from "./FlashCards.module.scss";

const flashCards = [
  {
    id: "f1",
    title: "Слова",
    descr:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, rerum expedita. Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",
  },
  {
    id: "f2",
    title: "Словосочетания",
    descr:
      "Accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",
  },
  {
    id: "f3",
    title: "Выражения",
    descr:
      "Rerum expedita. Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",
  },
  {
    id: "f4",
    title: "Фразовые глаголы",
    descr:
      "Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam.",
  },
];

const FlashCards = () => {
  return (
    <PageWrapper title="Разделы для карточек">
      <div className="container">
        <div className={cn(styles.cards, "d-flex fwr-wrap")}>
          {flashCards.map(flashCard => (
            <Card
              key={flashCard.id}
              className={cn(styles.card, "d-flex fd-col")}
            >
              <Typography tag="h3" className="mb-2">
                {flashCard.title}
              </Typography>
              <div className={cn(styles.text, "mb-3")}>{flashCard.descr}</div>
              <div className={styles.actions}>
                <Button type="primary" to={`${flashCard.id}`}>
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
