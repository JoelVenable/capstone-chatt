import React, { CSSProperties } from "react";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const buttonDivStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: ".8rem"
} as CSSProperties;

interface MyButtonProps extends ButtonProps {
  to?: string;
  component?: Link<any>;
}

// Open to suggestions about a better pattern here...

const CenteredButton: React.FC<MyButtonProps> = ({
  children = null,
  ...rest
}: MyButtonProps) => (
  <div style={buttonDivStyle}>
    <Button {...rest}>{children}</Button>
  </div>
);

export default CenteredButton;
