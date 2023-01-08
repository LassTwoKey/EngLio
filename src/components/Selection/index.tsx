import React, { FC, useState, useEffect } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
//import Button from "../../ui/Button";
import { IAnswer } from "../../types/Card";

import styles from "./index.module.scss";

interface SelectionProps {
  items: IAnswer[];
  setErrorSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswered: boolean;
  errorSelect: boolean;
  successSelect: boolean;
  correctAnswer: string;
  className?: string;
}

const Selection: FC<SelectionProps> = props => {
  const {
    items,
    setErrorSelect,
    setSuccessSelect,
    correctAnswer,
    setIsAnswered,
    isAnswered,
    errorSelect,
    successSelect
  } = props;
  console.log("log: ", items);
  const [answers, setAnswers] = useState<IAnswer[]>(items);

  useEffect(() => {
    setAnswers(items);
  }, [items]);

  const ErrorSelectHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const isCorrect =
      e.target.value.toLowerCase() === correctAnswer?.toLowerCase();

    const result = items.map(answer => {
      if (answer.value === value) {
        return { value: answer.value, selected: true };
      } else {
        return { value: answer.value, selected: answer.selected };
      }
    });
    setAnswers(result);

    if (isCorrect) {
      setSuccessSelect(true);
      setErrorSelect(false);
    }
    if (!isCorrect) {
      setSuccessSelect(false);
      setErrorSelect(true);
    }
    setIsAnswered(true);
  };
  return (
    <Card className={cn(styles.selection, "mb-2 pb-0 pt-0 pl-0 pr-0")}>
      {answers.map(answer => (
        // <Button key={item} onClick={ErrorSelectHandler}>
        //   {item}
        // </Button>
        <label
          key={answer.value}
          htmlFor={answer.value}
          className={cn({
            [styles.disabled]: isAnswered,
            [styles.errorSel]: answer.selected && errorSelect,
            [styles.successSel]: answer.selected && successSelect
          })}
        >
          <input
            type="radio"
            name="site_name"
            value={answer.value}
            id={answer.value}
            disabled={isAnswered}
            onChange={e => ErrorSelectHandler(e, answer.value)}
          />
          {answer.value}
        </label>
      ))}
    </Card>
  );
};

export default Selection;
