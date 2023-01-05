import { FC, useState } from "react";
import cn from "classnames";
import Filter from "../../components/Filter";
import FlashCard from "../../components/FlashCard";
import FlashCardActions from "../../components/FlashCardActions";
import Selection from "../../components/Selection";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

// const words = {
//   all: [
//     {
//       id: 1,
//       word: "Robber",
//       transcription: "[ˈräbər]",
//       correctTranslate: "грабитель",
//       answerOptions: ["Грабитель", "Дом", "Храм"]
//     },
//     {
//       id: 2,
//       word: "Robber",
//       transcription: "[ˈräbər]",
//       correctTranslate: "грабитель",
//       answerOptions: ["Грабитель", "Дом", "Храм"]
//     },
//     {
//       id: 3,
//       word: "Robber",
//       transcription: "[ˈräbər]",
//       correctTranslate: "грабитель",
//       answerOptions: ["Грабитель", "Дом", "Храм"]
//     },
//     {
//       id: 4,
//       word: "Robber",
//       transcription: "[ˈräbər]",
//       correctTranslate: "грабитель",
//       answerOptions: ["Грабитель", "Дом", "Храм"]
//     },
//     {
//       id: 5,
//       word: "Robber",
//       transcription: "[ˈräbər]",
//       correctTranslate: "грабитель",
//       answerOptions: ["Грабитель", "Дом", "Храм"]
//     }
//   ],
//   memorized: [],
//   selected: [],
//   failings: [],
//   favorite: []
// };

const FlashCardPage: FC = () => {
  const [isInit, setIsInit] = useState<boolean>(false);

  let content;

  content = isInit && (
    <div className="container pb-4">
      <div className={cn(styles.learnCard, "mx-auto", styles.error)}>
        <Typography tag="p" className="mb-2">
          9/10
        </Typography>
        <FlashCard />
        <Selection />
        <FlashCardActions />
        <Button type="primary" className={styles.nextBtn}>
          Далее
        </Button>
      </div>
    </div>
  );

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
