import AxiosVisualComponent1 from "./component/AxiosVisualComponent1"
import AxiosVisualComponent2 from "./component/AxiosVisualComponent2"
const App = () => {
  return (
    <>
      <div>
        <h1>Prueba de Componente Reutilziable de Axios</h1>
        <h3> Typescript - React - Use Axios - Axios Reducer</h3>
        <h4> Custom Logger - Custom Error</h4> 
        <a href="https://github.com/Juampicao/CursoReactPro_Typescript/tree/use-axios" target="_blank" > Codigo Github: </a>
      </div>

      <AxiosVisualComponent1 />
      <AxiosVisualComponent2/>
    </>
  )
}

export default App