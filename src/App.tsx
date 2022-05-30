import Botao from "./Components/Botao"
import style from "./App.module.scss";
import Input from "./Components/Input";

function App() {
  return (
    <div className={style.body}>
      <form className={style.formPadrao}>
        <Input>Seu Nome</Input>
        <Botao>
          Cadastrar
        </Botao>
      </form>
    </div>
  )
}

export default App
