import { FC } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import InfoBlock from "../../ui/InfoBlock";
import { ICard } from "../../types/Card";
import { useDelSectionDataMutation } from "../../api/sectionApi";
import { useAddFlashcardMutation } from "../../api/flashcardApi";

import styles from "./index.module.scss";

interface SectionCategoryProps {
  key: string;
  title: string;
  currentSection: string;
  currentCategory: string;
  items?: ICard[] | null;
  isLoading?: boolean;
  error?: any;
}

const SectionCategory: FC<SectionCategoryProps> = props => {
  const { items, title, isLoading, error, currentSection, currentCategory } =
    props;
  const [addItem] = useAddFlashcardMutation();
  const [delItem] = useDelSectionDataMutation();

  const removeFromHandler = async (
    id: string | undefined,
    item: ICard,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.currentTarget.disabled = true;
    if (!id) return;
    let body = {
      id: item.id,
      answerOptions: item.answerOptions,
      correctTranslate: item.correctTranslate,
      transcription: item.transcription,
      word: item.word
    };

    await addItem({
      id: currentCategory,
      body
    });

    await delItem({
      section: currentSection,
      category: currentCategory,
      id
    });
  };

  return (
    <div>
      <Card className={styles.titleBackground}>
        <Typography tag="h3">{title}</Typography>
      </Card>
      {isLoading && <Loader />}
      <ul>
        {!items && !isLoading && !error && (
          <Typography className="p-4" tag="p" isCenter>
            Пока нет добавлений
          </Typography>
        )}
        {error && !isLoading && (
          <InfoBlock className="pt-4" type="error" title="Ошибка загрузки" />
        )}
        {items?.map(item => (
          <div
            key={item.id}
            className={cn("d-flex jc-between pl-4 py-4", styles.item)}
          >
            <div className="">
              <div className="d-flex ai-center">
                <Typography tag="h3" className="mr-2">
                  {item.word}
                </Typography>
                {item.transcription && (
                  <Typography tag="p">{item.transcription}</Typography>
                )}
              </div>
              <Typography tag="p">{item.correctTranslate}</Typography>
            </div>
            <div className="d-flex ai-center">
              {/* <Button type="outlined" className="mr-2">
                Сложное
              </Button> */}
              <Button
                type="primary"
                onClick={(e: any) => removeFromHandler(item.uniqueId, item, e)}
              >
                Убрать
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SectionCategory;
