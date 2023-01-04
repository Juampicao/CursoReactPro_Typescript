import { PlacesProvider } from "./context/places"

export const MapsApp = () => {
  return (
    <>
      <PlacesProvider>
        <h1> Hola desde MapsApp.tsx</h1>
      </PlacesProvider>
    </>
  )
}
