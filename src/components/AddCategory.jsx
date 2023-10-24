import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        console.log(event)
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // es posible gracias a que setCategories que se trae en los prop
        // de los componestes, trae la referencia a la funcion original
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    //  una funcion que recibe un callback y inmediatamente
    //  se vuelve a usar se puede abreviar
    // <form onSubmit={ (event) => onSubmit(event)}>
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="BuscarGif" 
            value={ inputValue }
            onChange={ onInputChange }//esta eviando evenr (event) => onInputChange(event)
        />
    </form>
  )
}
