import React from "react";
import cn from "classnames";

import styles from "./index.module.scss";

const Typography = (props: any) => {
  const { tag, className, isBig } = props;

  const classNames = cn({
    [styles.title]: tag === "h1" || tag === "h2" || tag === "h3",
    [styles.title1]: tag === "h1",
    [styles.title2]: tag === "h2",
    [styles.title3]: tag === "h3",
    [styles.title4]: tag === "h4",
    [styles.paragraph]: tag === "p",
    [styles.paragraphBig]: (tag === "p" || tag === "li") && isBig,
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
