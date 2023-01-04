import React, { useState } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Card from "../../ui/Card";

import styles from "./index.module.scss";

const words = {
  all: [
    {
      id: 1,
      word: "Robber",
      transcription: "[ˈräbər]",
      correctTranslate: "грабитель",
      answerOptions: ["Грабитель", "Дом", "Храм"]
    },
    {
      id: 2,
      word: "Robber",
      transcription: "[ˈräbər]",
      correctTranslate: "грабитель",
      answerOptions: ["Грабитель", "Дом", "Храм"]
    },
    {
      id: 3,
      word: "Robber",
      transcription: "[ˈräbər]",
      correctTranslate: "грабитель",
      answerOptions: ["Грабитель", "Дом", "Храм"]
    },
    {
      id: 4,
      word: "Robber",
      transcription: "[ˈräbər]",
      correctTranslate: "грабитель",
      answerOptions: ["Грабитель", "Дом", "Храм"]
    },
    {
      id: 5,
      word: "Robber",
      transcription: "[ˈräbər]",
      correctTranslate: "грабитель",
      answerOptions: ["Грабитель", "Дом", "Храм"]
    }
  ],
  memorized: [],
  selected: [],
  failings: [],
  favorite: []
};

const FlashCardPage = () => {
  const [words, setWords] = useState([]);

  const filterByOrder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(1);
  };
  return (
    <PageWrapper>
      <div className="container py-4">
        <Typography tag="p">Фильтры:</Typography>
        <div className={cn(styles.actions)}>
          <div className={cn("d-flex", styles.actionsTop)}>
            <Button
              onClick={filterByOrder}
              type="outlined"
              className={cn(styles.active)}
            >
              По порядку
            </Button>
            <Button type="outlined">Смешанные</Button>
            <Button type="outlined">Задом наперед</Button>
          </div>

          <div className={cn("d-flex", styles.actionsBottom)}>
            <Button type="outlined">Выученные</Button>
            <Button type="outlined">Сложные</Button>
          </div>
          <div className={cn(styles.learnCard, "mx-auto")}>
            <Typography tag="p" className="mb-2">
              9/10
            </Typography>
            <Card className={cn(styles.cardMain, "mb-4")}>
              <Typography tag="h2" className="mb-3">
                Robber
              </Typography>
              <Typography tag="p" className="mb-3">
                [ˈräbər]
              </Typography>
              <Typography tag="h3">Robber</Typography>
            </Card>

            <Card
              className={cn(
                styles.cardSuggestion,
                "mb-2",
                "pb-0",
                "pt-0",
                "pl-0",
                "pr-0"
              )}
            >
              <Button>Грабитель</Button>
              <Button>Дом</Button>
              <Button>Храм</Button>
            </Card>
            <div className={cn(styles.cartAction, "mb-2 d-flex jc-center")}>
              <Button type="common" className={styles.skip}>
                <span className="_icon-ok"></span>
              </Button>
              <Button type="common" className={styles.memorized}>
                <span className="_icon-close"></span>
              </Button>
              <Button type="common" className={styles.favorite}>
                <span className="_icon-bookmark"></span>
              </Button>
            </div>
            <Button type="primary" className={styles.nextBtn}>
              Далее
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FlashCardPage;
