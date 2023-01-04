import { FC } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { IBaseUI } from "../../types/ComponentUI";

import styles from "./index.module.scss";

interface ButtonProps extends IBaseUI {
  type?: string;
  icon?: string;
  iconPosition?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  to?: string;
  active?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const {
    className,
    type,
    children,
    icon,
    iconPosition,
    onClick,
    to,
    disabled,
    active
  } = props;

  // check
  const isPrimary = type === "primary";
  const isLight = type === "light";
  const isOutlined = type === "outlined";
  const isCommon = type === "common";

  const Icon = icon && <span className={`${icon}`}></span>;

  const classes = cn(styles.button, "d-iflex ai-center jc-start", {
    [styles.button_primary]: isPrimary,
    [styles.button_outlined]: isOutlined,
    [styles.button_light]: isLight,
    [styles.button_common]: isCommon,
    [styles.active]: active,
    "p-2": isLight,
    [className as string]: className
  });

  return (
    <>
      {to ? (
        <NavLink
          {...props}
          type={"button"}
          className={({ isActive }) =>
            isActive ? cn(classes, styles.button_light_ac) : classes
          }
          onClick={e => onClick && onClick(e)}
          to={to}
        >
          {Icon && (iconPosition === "start" || !iconPosition) && (
            <div
              className={cn("d-flex ai-center jc-center", {
                "mr-2": children
              })}
            >
              {Icon}
            </div>
          )}
          {children}
          {Icon && iconPosition === "end" && Icon}
        </NavLink>
      ) : (
        <button
          type="button"
          className={classes}
          onClick={e => onClick && onClick(e)}
          disabled={disabled}
        >
          {Icon && (iconPosition === "start" || !iconPosition) && (
            <div
              className={cn("d-flex ai-center jc-center", {
                "mr-2": children
              })}
            >
              {Icon}
            </div>
          )}
          {children}
          {Icon && iconPosition === "end" && Icon}
        </button>
      )}
    </>
  );
};

export default Button;
