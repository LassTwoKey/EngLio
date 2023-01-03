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
    disabled,
  } = props;

  // check
  const isPrimary = type === "primary";
  const isSecondary = type === "secondary";
  const isColor = type === "color";
  const isLight = type === "light";

  const Icon = icon && <span className={`${icon}`}></span>;

  const classes = cn(styles.button, "d-flex ai-center jc-start", {
    [styles.button_primary]: isPrimary,
    [styles.button_secondary]: isSecondary,
    [styles.button_color]: isColor,
    [styles.button_light]: isLight,
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
          className={({ isActive }) =>
            isActive ? cn(classes, styles.button_light_ac) : classes
          }
          onClick={e => onClick && onClick(e)}
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
