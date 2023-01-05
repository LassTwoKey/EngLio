import { FC } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const categories = [
  {
    id: "words",
    title: "Слова",
    descr:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, rerum expedita. Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",
    favorites: []
  },
  {
    id: "phrases",
    title: "Словосочетания",
    descr:
      "Accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",

    favorites: []
  },
  {
    id: "expressions",
    title: "Выражения",
    descr:
      "Rerum expedita. Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam, at officiis.",

    favorites: []
  },
  {
    id: "phrasal-verbs",
    title: "Фразовые глаголы",
    descr:
      "Magnam possimus maxime eligendi neque error sequi accusantium vitae laborum amet nisi corporis asperiores ratione placeat ipsam.",

    favorites: []
  }
];

const FavoritesPage: FC = () => {
  return (
    <PageWrapper title="Избранное">
      <div className="container">
        {categories.map(categorie => (
          <Card key={categorie.id} className={"mb-4 pt-0 pb-0 pr-0 pl-0"}>
            <Button to={categorie.id} className={cn("p-4", styles.button)}>
              <Typography tag="h3">{categorie.title}</Typography>
            </Button>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
};

export default FavoritesPage;
