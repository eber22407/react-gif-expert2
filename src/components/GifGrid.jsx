import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // custom hooks
  const { images, isLoading} = useFetchGifs( category );
  // console.log(isLoading)

  return (
    <>
        <h3>{ category }</h3>
        {
          // es un and logico si isLoading esta en true ejecuta la 2da parte del h2 sino va para atras
          isLoading && ( <h2>Cargando..</h2> )
        }
        <div className="card-grid">
          {
            // desestructura
            images.map( ( image ) => (
              <GifItem 
                key={ image.id}
                { ...image }//sirve para esparcir las propiedades
              />
              // <li key={ id }>{ title }</li>
            ))
          }
        </div>
    </>
  )
}
