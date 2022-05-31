import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  return <Container {...rest} />;
};
