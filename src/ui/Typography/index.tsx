import React, { FC } from "react";
import cn from "classnames";
import { IBaseUI } from "../../types/ComponentUI";

import styles from "./index.module.scss";

interface TypographyProps extends IBaseUI {
  tag: string;
  isBig?: boolean;
}

const Typography: FC<TypographyProps> = props => {
  const { tag, className, isBig, children } = props;

  const classNames = cn({
    [styles.title]: tag === "h1" || tag === "h2" || tag === "h3",
    [styles.title1]: tag === "h1",
    [styles.title2]: tag === "h2",
    [styles.title3]: tag === "h3",
    [styles.title4]: tag === "h4",
    [styles.paragraph]: tag === "p",
    [styles.paragraphBig]: (tag === "p" || tag === "li") && isBig,
    [className as string]: className
  });

  return React.createElement(
    tag,
    {
      className: classNames
    },
    children
  );
};

export default Typography;
