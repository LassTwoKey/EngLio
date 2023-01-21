import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import { IInfo } from "../../types/Info";
import { IBaseUI } from "../../types/ComponentUI";

import styles from "./index.module.scss";

interface InfoBlockProps extends IBaseUI, IInfo {}

const InfoBlock: FC<InfoBlockProps> = props => {
  const { title, text, type, className } = props;

  const infoTypeClass = {
    [styles[type]]: !!type
  };
  return (
    <div
      className={cn(
        "d-flex fd-col jc-center pb-4",
        styles.centered,
        infoTypeClass,
        className
      )}
    >
      <Typography tag="h3" className="mb-2" isCenter>
        {title}
      </Typography>
      {text && (
        <Typography tag="p" isCenter>
          {text}
        </Typography>
      )}
    </div>
  );
};

export default InfoBlock;
