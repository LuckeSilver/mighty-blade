import style from "./Botao.module.scss"

export default function Botao(props:any) {
  return (
    <div>
      <button className={style.botao}>
        {props.children}
      </button>
    </div>
  )
}