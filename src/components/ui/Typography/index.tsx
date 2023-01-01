import React from "react";
import cn from "classnames";

import styles from "./index.module.scss";

const Typography = (props: any) => {
  const { tag, className } = props;

  const classNames = cn({
    [styles.Title]: tag === "h1" || tag === "h2" || tag === "h3",
    [styles.Title1]: tag === "h1",
    [styles.Title2]: tag === "h2",
    [styles.Title3]: tag === "h3",
    [styles.Title4]: tag === "h4",
    [styles.Paragraph]: tag === "p",
    [className]: className,
  });

  return React.createElement(
    tag,
    {
      className: classNames,
    },
    props.children
  );
};

export default Typography;
