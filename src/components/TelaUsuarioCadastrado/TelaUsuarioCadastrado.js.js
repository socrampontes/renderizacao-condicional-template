import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
    const{setScreen}=props
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>

            <button onClick={()=>setScreen("login")}>Voltar para tela de Login</button>
        </Div>
    )
}

export default TelaUsuarioCadastrado;