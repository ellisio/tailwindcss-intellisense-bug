import { Button as BaseButton, ButtonProps, extendVariants } from "@nextui-org/react";
import { forwardRef } from "react";

const NextUIButton = extendVariants(BaseButton, {
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      warning: "",
      danger: "",
      success: "",
    },
    variant: {
      solid: "",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "solid",
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: "text-black",
    },
    {
      variant: "solid",
      color: "primary",
      class: "text-white",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "text-white",
    },
    {
      variant: "solid",
      color: "warning",
      class: "text-black",
    },
    {
      variant: "solid",
      color: "danger",
      class: "text-white",
    },
    {
      variant: "solid",
      color: "success",
      class: "text-white",
    },
  ],
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { color = "primary", variant = "solid", ...rest } = props;

  return <NextUIButton ref={ref} color={color} variant={variant} {...rest} />;
});

Button.displayName = "Button";
