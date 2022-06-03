import Botao from "../../Components/Botao";
import Input from "../../Components/Input";
import style from "./Home.module.scss";

export default function Home() {
  return(
    <main className={style.container}>
      <h1>Criação de personagens</h1>
      <div className={style.content}>
        <aside className={style.left}>
          <form className={style.formPadrao}>
            <Input>Seu Nome</Input>
            <Botao>
              Cadastrar
            </Botao>
          </form>
        </aside>
        <aside className={style.right}>
          <h2>Infos Personagem</h2>
        </aside>
      </div>
    </main>
  )
}