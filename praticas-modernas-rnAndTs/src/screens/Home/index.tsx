import React from "react";

import { Container, Header, Content } from "./styles";

import { Input } from "../../components/Input";
import { Card } from "../../components/Card/";

import bannerImg from "../../assets/kaysa-banner.png";

const Home = () => {
  return (
    <Container>
      <Header source={bannerImg}>
        <Input placeHolder="Pesquise seu champ favorito..." />
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
};
export default Home;

// styled component  npm install --save styled-components
// instalar types em dev => npm install --save @types/styled-components-react-native -D
