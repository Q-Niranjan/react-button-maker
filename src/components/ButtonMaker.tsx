import React from "react";

export type ButtonMakerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  text?: string;
  buttonStyle?: string;
  textStyle?: string;
};

const ButtonMaker: React.FC<ButtonMakerProps> = ({
  label,
  text,
  buttonStyle,
  textStyle,
  onClick,
  ...rest
}) => {
  return (
    <button onClick={onClick} className={buttonStyle || ""} {...rest}>
      {label}
      {text && <span className={textStyle || ""}>{text}</span>}
    </button>
  );
};

export default ButtonMaker;
