import { FC } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

interface FlashCardProps {
  word: string;
  transcription?: string;
  correctTranslate: string;
  className?: string;
}

const FlashCard: FC<FlashCardProps> = props => {
  const { word, transcription, correctTranslate, className } = props;
  return (
    <Card
      className={cn("mb-4 py-6", styles.cardMain, {
        [className as string]: !!className
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
