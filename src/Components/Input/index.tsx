import style from "./Input.module.scss"

type InputProps = {
  children: string;
}

export default function Input(props: InputProps) {
  return(
    <div className={style.row100}>
      <div className={style.col}>
        <div className={style.inputBox}>
          <input name="nome" required />
            <span className={style.text}>{props.children}</span>
            <span className={style.line}></span>
        </div>
      </div>
    </div>
  )
}