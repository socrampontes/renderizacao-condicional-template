import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const{setScreen}=props
  return (
    <FormContainer >
      <h1>Cadastro </h1>
      <Form >
        <StyledLabel htmlFor="titulo" >
          Nome:
          <Input id="titulo" required/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" required />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" required/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" required />
        </StyledLabel>
        <SendButton onClick={()=>setScreen("cadastrado")}>Cadastrar</SendButton>
        <BackToLoginButton onClick={()=>setScreen("login")} /* onClick={()=>props.screenChange("cadastro") */>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
