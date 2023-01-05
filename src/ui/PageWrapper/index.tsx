import { FC } from "react";
import cn from "classnames";
import Typography from "../Typography";
import { IBaseUI } from "../../types/ComponentUI";
import GoBack from "../GoBack";

import styles from "./index.module.scss";

interface PageWrapperProps extends IBaseUI {
  title?: string;
  center?: boolean;
  goBack?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = props => {
  const { className, children, title, center, goBack } = props;

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
      <div className="container mt-3 mb-3">{goBack && <GoBack />}</div>
      {title && (
        <div className="container">
          <Typography tag="h2" className={cn("pb-8", styles.pageTitle)}>
            {title}
          </Typography>
        </div>
      )}
      {children}
    </main>
  );
};

export default PageWrapper;
