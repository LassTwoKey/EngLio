import cn from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const Button = (props: any) => {
  const {
    className,
    type,
    children,
    icon,
    iconPosition,
    onClick,
    to,
    disabled
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
    "p-2": isLight,
    [className]: className
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
              className={cn("d-flex ai-center jc-center", { "mr-2": children })}
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
