import React, { FC, useState, useEffect } from "react";
import cn from "classnames";
import { IAnswer } from "../../types/Card";
import { ActionKind } from "../../data/enums";

import styles from "./index.module.scss";

interface SelectionProps {
  items: IAnswer[];
  correctAnswer: string;
  isAnswered: boolean;
  errorSelect: boolean;
  successSelect: boolean;
  dispatchFlashCard: React.Dispatch<any>;
}

const Selection: FC<SelectionProps> = props => {
  const {
    items,
    correctAnswer,
    isAnswered,
    errorSelect,
    successSelect,
    dispatchFlashCard
  } = props;
  const [answers, setAnswers] = useState<IAnswer[]>(items);

  useEffect(() => {
    setAnswers(items);
  }, [items]);

  const validateSelectHandler = (
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
      dispatchFlashCard({ type: ActionKind.SetSuccessSelect, payload: true });
      dispatchFlashCard({ type: ActionKind.SetErrorSelect, payload: false });
      dispatchFlashCard({ type: ActionKind.SetCorrectNum });
    }
    if (!isCorrect) {
      dispatchFlashCard({ type: ActionKind.SetSuccessSelect, payload: false });
      dispatchFlashCard({ type: ActionKind.SetErrorSelect, payload: true });
    }
    dispatchFlashCard({ type: ActionKind.SetIsAnswered, payload: true });
  };
  return (
    <div className={cn(styles.selection, "mb-2 pb-0 pt-0 pl-0 pr-0")}>
      {answers.map(answer => (
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
            onChange={e => validateSelectHandler(e, answer.value)}
          />
          {answer.value}
        </label>
      ))}
    </div>
  );
};

export default Selection;
