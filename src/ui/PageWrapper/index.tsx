import { FC } from "react";
import cn from "classnames";
import Typography from "../Typography";
import { IBaseUI } from "../../types/ComponentUI";

import styles from "./index.module.scss";

interface PageWrapperProps extends IBaseUI {
  title?: string;
  center?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = props => {
  const { className, children, title, center } = props;

  const classNames = cn({
    [styles.pageWrapper]: true,
    [className as string]: className,
    "pt-12": true,
    "d-flex": true,
    "fd-col": true,
    "jc-center": center
  });
  return (
    <main className={classNames}>
      {title && (
        <div className="container">
          <Typography tag="h2" className={cn("py-8", styles.pageTitle)}>
            {title}
          </Typography>
        </div>
      )}
      {children}
    </main>
  );
};

export default PageWrapper;
