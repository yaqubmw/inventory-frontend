import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "utils/utils";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300 rounded-md",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    sm: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  },
  variant: {
    primary: "bg-green-500 hover:bg-green-700 text-white",
    secondary: "bg-blue-200 hover:bg-blue-400 text-gray-900 hover:text-white",
    danger: "bg-red-500 hover:bg-red-800 text-white",
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className,
      variant = "primary",
      size = "normal",
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "normal", "lg"]),
};

export default Button;
