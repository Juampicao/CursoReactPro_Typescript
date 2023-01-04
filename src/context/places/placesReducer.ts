import { PlacesState } from "./PlacesProvider";


type PlacesAction = {
    type: "setuserLocation", payload: [number,number]
}

// Siempre devuelve algo de tipo PlacesState
export const placesReducer = (state: PlacesState , action: PlacesAction ) : PlacesState => {
    

    switch (action.type) {
        case `setuserLocation`:
            return {
                ...state, 
                isLoading: false,
                userLocation : action.payload
            }
        
        default:
            return state
    }

}