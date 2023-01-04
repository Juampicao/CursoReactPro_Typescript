import { createContext } from "react";


export interface PlacesContextProps{
    isLoading: boolean;
    userLocation?: [number,number]
}


export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)



// Difernecia entre contexto y estado
// Estado: Guardo en memoria
// Context: Lo que quiero que los otros compoenntes vean.