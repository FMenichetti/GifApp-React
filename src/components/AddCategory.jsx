import { useState } from "react"



export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')


    //Tomo el value del evento onChange del input, y lo seteo
    const onInputChange = (event) => { //El event se puede desestructurar y sacar el target
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    //Tomo el event del submit y lo imprimo
    const onSubmit = ( event ) =>{
        event.preventDefault(); //Evita el refresh de la pagina
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [ inputValue , ...categories, ] )//Agrego categoria inputValue a traves del setCategory
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }



    return (
        <form onSubmit={ event => (onSubmit( event ))}>

            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                // onChange={ ( event ) => onInputChange( event ) } //Es lo mismo que abajo
                onChange={onInputChange}
            />

        </form>
    )
}
