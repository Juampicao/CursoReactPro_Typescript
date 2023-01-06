import { useEffect } from 'react';
import useAxios from './hooks/useAxios';
import { FetchAxios, IMethods } from './interfaces/interfaces';
 

const AxiosDefaultComponent = () => {
  
  let urlBase = 'http://localhost:4000/people'
  let method = IMethods.GET
  let data: any = { name: "juan", age: 20 }
  
  // Objeto FetchAxios para enviar al useAxios.
  let fetchAxiosObject = new FetchAxios(urlBase, method, data )
  
  const { handleSubmit, state } = useAxios();
  
  const { loading, respuestaAPI, errorAPI } = state;

  // Pruebas 4 funciones.
  const handleClickGetPersonas = () => {
    console.log("tocando handleClickGet")
    fetchAxiosObject = new FetchAxios(urlBase, method, data)
    handleSubmit(fetchAxiosObject)
  } 

  const handleClickGetClubes = () => {
    urlBase = `http://localhost:4000/clubs`
    console.log("tocando handleClickGetClubes")
    fetchAxiosObject = new FetchAxios(urlBase, method, data)
    handleSubmit(fetchAxiosObject)
  }

  const handleClickPostClubes = () => {
    urlBase = `http://localhost:4000/clubs`
    data = {"nombre": "Independiente"}
    console.log("tocando handleClickPostClubes")
    fetchAxiosObject = new FetchAxios(urlBase, IMethods.POST, data)
    handleSubmit(fetchAxiosObject)
  }

  const handleClickPostError = () => {
    urlBase = `http://localhost:4000/clubss`
    data = {"nombre": "Independiente"}
    console.log("tocando handleClickPostClubes")
    fetchAxiosObject = new FetchAxios(urlBase, IMethods.POST, data)
    handleSubmit(fetchAxiosObject)
  }
  
  useEffect(() => {
      console.log("cambiando.")
  }, [loading, respuestaAPI, errorAPI])
  
  return (
    <>
      <div className='axios-class'>
        <button onClick={handleClickGetPersonas} type="button"> GET Personas</button>

        <button onClick={handleClickGetClubes} type="button"> GET Clubes</button>
        
        <button onClick={handleClickPostClubes} type="button"> POST Club Independiente</button>

        <button onClick={handleClickPostError} type="button"> POST Clubes Error Forzado Mal Url</button>
        
      </div>

      <div>
        {state.loading ?
          "cargando..."
          :
          <>
              <div>
                <p> Loading: </p>
                {JSON.stringify(state.loading)}
              </div>

              <div>
                <p> Respuesta Data: </p>
                {JSON.stringify(state.respuestaAPI.data)}
              </div>
            </>
        }
        {
          state.errorAPI ?
            <>
              <p> Error: </p>
              { JSON.stringify(state.errorAPI) }
            </>
            :
          ""
        }
    
      </div>
      

    </>
  );
};
 
export default AxiosDefaultComponent





// const Prueba = () => {

//   const [url, seturl] = useState({ tipo: 'GET', url: 'http://localhost:4000/people' });
//   const [datos, setDatos] = useState({});
  
//   const { loading, errorAPI, respuestaAPI } = useAxios(url, datos);
 
//   const handleClick = (boton : string) => {
//     if (boton === 'botonGet') {
//       seturl({ tipo: 'GET', url: 'http://localhost:4000/clubs' });
 
//       // En un GET los datos serán ignorados, siempre mandaremos un objeto vacío
//       setDatos({});
//     } else if (boton === 'botonPost') {
//       seturl({ tipo: 'POST', url: 'http://localhost:4000/clubs' });
 
//       setDatos({ datosUno: 'datosUno', datosDos: 'datosDos' });
//     }
//   };
 
//   const MostrarRespuesta = () => {
//     if (loading === true) {
//       return <div>Cargando...</div>;
//     }
 
//     let respuesta = {};
 
//     if (errorAPI) {
//       respuesta = errorAPI;
//     } else {
//       respuesta = respuestaAPI;
//     }
 
//     return Object.keys(respuesta).map(key => {
//       return (
//         <div key={key}>
//           {/* {key}: {JSON.stringify(respuesta[key])} */}
//         </div>
//       );
//     });
//   };
 
//   return (
//     <>
//       <div>
//         <button onClick={() => handleClick('botonGet')} type="button">Consulta GET</button>
//         <button onClick={() => handleClick('botonPost')} type="button">Consulta POST</button>
//       </div>
//       <div>
//         {/* <MostrarRespuesta /> */}
//         {JSON.stringify(loading)}
//         {JSON.stringify(respuestaAPI)}
//         {JSON.stringify(errorAPI)}

//       </div>
//     </>
//   );
// };
 
// export default Prueba