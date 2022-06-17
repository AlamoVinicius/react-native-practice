import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { Rating, AirbnbRating } from "react-native-ratings";

import { Container, TextCustom } from "./styles";

export default function Homme() {
  return (
    <Container>
      <Rating
        readonly={true} // this prop allow only read stars  // mostra no perfil, e usa a mesma lib para avaliar no aplicativo do correspondente?
        imageSize={20} 
        showRating={true} 
        ratingCount={5}  // number of stars
        startingValue={4.5}  //somente com este valor é possivel controlar as estrelas renderizadas
        style={{ paddingVertical: 10 }}
      />

      <TextCustom>Open up App.js to start working on your app!</TextCustom>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

// test working was expected but why does'n work in the company??
