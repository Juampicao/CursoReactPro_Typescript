import axios from "axios";
import { useReducer } from 'react';
import { axiosReducer } from '../axiosReducer';
import { FetchAxios, IAxiosState } from '../interfaces/interfaces';

const INITIAL_STATE: IAxiosState = {
    loading: false,
    errorAPI: null,
    respuestaAPI: "Aun no hay data",
}


const useAxios = () => {

  const [state, dispatch] = useReducer(axiosReducer, INITIAL_STATE);
 
  const handleSubmit = async (fetchAxiosObject: FetchAxios) => {
    
    const { method, url, data } = fetchAxiosObject; 
    
    let componenteDesmontado = false;
 
    const consultaAPI = async () => {
      dispatch({ type: 'INICIO_CONSULTA_API' });
 
      try {

        const response = await axios({ method: method, url: url, data: data });
        if (!componenteDesmontado) {
          dispatch({ type: 'RESPUESTA_CONSULTA_OK', payload: response });
        }
      } catch (error : any) {
        if (!componenteDesmontado) {
          dispatch({ type: 'RESPUESTA_CONSULTA_KO', payload: error.response });
        }
        console.log(error)
      }
    };
 
    consultaAPI();
 
    return () => {
      componenteDesmontado = true;
    };
 
  }
  
  return {state, handleSubmit};
};
 
export default useAxios;

