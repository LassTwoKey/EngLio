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
    active,
    onClick,
    to,
    disabled,
  } = props;

  // check
  const isPrimary = type === "primary";
  const isSecondary = type === "secondary";
  const isColor = type === "color";
  const isLight = type === "light";

  const Icon = icon && <span className={`${icon}`}></span>;

  const classes = cn(styles.Button, "d-flex ai-center jc-start", {
    [styles.Button_primary]: isPrimary,
    [styles.Button_secondary]: isSecondary,
    [styles.Button_color]: isColor,
    [styles.Button_light]: isLight,
    [styles.Button_light_ac]: active && isLight,
    "py-3 px-4": isColor,
    "p-2": isLight,
    [className]: className,
  });

  return (
    <>
      {to ? (
        <NavLink
          {...props}
          type={"button"}
          className={classes}
          to={to}
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
