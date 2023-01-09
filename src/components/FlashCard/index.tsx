import { FC } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

interface FlashCardProps {
  word: string;
  transcription?: string;
  correctTranslate: string;
  errorSelect: boolean;
  successSelect: boolean;
  isAnswered: boolean;
}

const FlashCard: FC<FlashCardProps> = props => {
  const {
    word,
    transcription,
    correctTranslate,
    errorSelect,
    successSelect,
    isAnswered
  } = props;
  return (
    <Card
      className={cn("mb-4 py-6", styles.cardMain, {
        [styles.showAnswer]: isAnswered,
        [styles.errorBoxShadow]: errorSelect,
        [styles.successBoxShadow]: successSelect
      })}
    >
      <Typography tag="h2" className="mb-3">
        {word}
      </Typography>
      <Typography tag="p" className="mb-3">
        {!!transcription ? transcription : "-"}
      </Typography>
      <Typography tag="h3">{correctTranslate}</Typography>
    </Card>
  );
};

export default FlashCard;
