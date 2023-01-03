import cn from "classnames";
import Typography from "../components/ui/Typography";
import PageWrapper from "../components/ui/PageWrapper";
import Button from "../components/ui/Button";
import { paths } from "../data/constants";

import styles from "./WelcomePage.module.scss";

const technologies: { id: string; value: string }[] = [
  {
    id: "t1",
    value: "React",
  },
  {
    id: "t2",
    value: "Redux Toolkit",
  },
  {
    id: "t3",
    value: "React Router v6",
  },
  {
    id: "t4",
    value: "TypeScript",
  },
  {
    id: "t5",
    value: "Classnames",
  },
  {
    id: "t6",
    value: "SCSS",
  },
];

const WelcomePage = () => {
  return (
    <PageWrapper className={cn(styles.backImg)}>
      <div className="container">
        <Typography tag="h1" className={cn("mb-4")}>
          Добро пожаловать
        </Typography>
        <Typography tag="p" className={cn("mb-4", styles.text)}>
          EngLio - это небольшое приложение для изуения английского языка по
          карточкам.
        </Typography>
        <Typography tag="h2" className={cn("mb-2", styles.title2)}>
          Технологии, использованные в проекте:
        </Typography>
        <ul className={cn("mb-4")}>
          {technologies.map(technology => (
            <Typography key={technology.id} tag="li" isBig>
              - {technology.value}
            </Typography>
          ))}
        </ul>
        <Button
          className={styles.centered}
          type="primary"
          icon="_icon-light-mode"
          to={`/${paths.flashcards}`}
        >
          Начать изучение
        </Button>
      </div>
    </PageWrapper>
  );
};

export default WelcomePage;
