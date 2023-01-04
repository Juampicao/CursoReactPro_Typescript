import { useEffect, useReducer } from "react"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"

export interface PlacesState{
    isLoading: boolean,
    userLocation?: [number, number]
}


const INITIAL_STATE: PlacesState = {
    isLoading : true,
    userLocation: undefined
}

interface PropsPlacesProvider{
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: PropsPlacesProvider) => {
    
    // Init useReducer with initial state with specific reducer, placesReducer(specific actions)
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()
            .then( lngLAT => dispatch({type : "setuserLocation", payload: lngLAT}))
    }, [])
    

    return (
        <PlacesContext.Provider value={{
            // Show whole state..
              ...state,
        }} >
            {children}
        </PlacesContext.Provider>

    )
}

// Difernecia entre contexto y estado
// Estado: Guardo en memoria
// Context: Lo que quiero que los otros compoenntes vean.