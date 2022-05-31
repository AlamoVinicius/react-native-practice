import React from "react";

import { Container, Header } from "./styles";

import { Input } from "../../components/Input";

import bannerImg from "../../assets/kaysa-banner.png";

const Home = () => {
  return (
    <Container>
      <Header source={bannerImg}>
        <Input placeholder='pesquisar seu champ favorito...'/>
      </Header>
    </Container>
  );
};
export default Home;

// styled component  npm install --save styled-components
// instalar types em dev => npm install --save @types/styled-components-react-native -D
