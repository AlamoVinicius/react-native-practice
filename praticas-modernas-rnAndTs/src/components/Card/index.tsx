import React from "react";

import kaysaImg from "../../assets/kaysa.png";
import { Container, Image, Title, Local, Strong } from "./styles";

export function Card() {
  return (
    <Container>
      <Image source={kaysaImg} resizeMode="contain" />
      <Title>Kaysa</Title>
      <Local><Strong>Local:</Strong> Vazio</Local>
    </Container>
  );
}
