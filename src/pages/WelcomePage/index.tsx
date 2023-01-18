import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import PageWrapper from "../../ui/PageWrapper";
import Button from "../../ui/Button";
import { paths } from "../../data/constants";
import { useWelcomeQuery } from "../../lib/welcomeApi";

import styles from "./index.module.scss";

const WelcomePage: FC = () => {
  const { data: info, error } = useWelcomeQuery();

  if (error) {
    return (
      <PageWrapper className={cn(styles.backImg)} center>
        <div className="container py-6">
          <Typography tag="h1" className={cn("mb-4")}>
            Ошибка
          </Typography>
        </div>
      </PageWrapper>
    );
  }
  return (
    <PageWrapper className={cn(styles.backImg)} center>
      {info && (
        <div className="container py-6">
          <Typography tag="h1" className={cn("mb-4")}>
            {info.mainTitle}
          </Typography>
          <Typography tag="p" className={cn("mb-4", styles.text)}>
            {info.descr}
          </Typography>
          <Typography tag="h2" className={cn("mb-2", styles.title2)}>
            {info.listTitle}
          </Typography>
          <ul className={cn("mb-4")}>
            {info.technologies.map(technology => (
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
      )}
    </PageWrapper>
  );
};

export default WelcomePage;
