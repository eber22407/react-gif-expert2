import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['onePunch']);

  const onAddCategory = ( newCategory ) =>{
    
    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory, ...categories ]);
    // setCategories( cat => [...cat, 'Valorant']); OTRA FORMA DE HACERLO
  }

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
        {/* INPUT */}
        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (event) => onAddCategory(event) }
        />
        {/* LISTADO DE GIF */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        
        {
          categories.map( (category) => 
            // return <li key={ category }>{category}</li>
            (
              <GifGrid 
                key={ category } 
                category={ category }
              />
            ))
        }
        {/* <li></li> */}
        
        {/* GIF ITEM */}
    </>
  )
}
