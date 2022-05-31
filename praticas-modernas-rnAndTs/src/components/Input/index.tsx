import React from "react";

import { Container } from "./styles";

type props = {
  placeHolder: string
}

export const Input = ({placeHolder}:props) => {
  return <Container placeholder={placeHolder} />;
};
