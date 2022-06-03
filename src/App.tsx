import AppRoutes from "./Routes"
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.body}>
      <AppRoutes/>
    </div>
  )
}

export default App
