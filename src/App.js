import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [screen, setScreen] = useState("login");

  const checkScreen = () => {
    if (screen === "login") {
      return <TelaLogin setScreen={setScreen} />;
    }
    if (screen === "cadastro") {
      return <TelaCadastro setScreen={setScreen} />;
    }
    if (screen === "cadastrado") {
      return <TelaUsuarioCadastrado setScreen={setScreen} />;
    }
  };

  /* 
 podemos fazer também com funcão para passar como props
 const screenChange = (newScreen) => {
    setScreen(newScreen);
  }; 

  return (
    <MainContainer>
      <GlobalStyled />
      {screen === "login" ? <TelaLogin screenChange={screenChange}/> : <TelaCadastro screenChange={screenChange}/>}
      <TelaCadastro />
    </MainContainer>
  );  */

  /* if (screen === "login") {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaLogin setScreen={setScreen} />
      </MainContainer>
    );
  }

  if (screen === "cadastro") {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaCadastro setScreen={setScreen} />
      </MainContainer>
    );
  }

  if (screen === "cadastrado") {
    return (
      <MainContainer>
        <GlobalStyled />
        <TelaUsuarioCadastrado setScreen={setScreen} />
      </MainContainer>
    );
  } */

  return (
    <MainContainer>
      <GlobalStyled />
      {checkScreen()}
    </MainContainer>
  );
}

export default App;
