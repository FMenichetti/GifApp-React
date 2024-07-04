import { useState } from "react";
import { AddCategory, GiftGrid } from './components';

export const GiftApp = () => {


    const [categories, setCategories] = useState(['Slam Dunk']);

    const onAddCategory = (onNewCategory) => { //Agrega 'Slam Dunk al principio del array de categories

        if (categories.includes(onNewCategory)) return //Si la categoria ya esta en el array

        setCategories([onNewCategory, ...categories,])
        //setCategories( cat => [...cat, 'Slamp Dunkkk']);
    }


    return (
        <>

            <h1>GiftApp</h1>
            <h2>Curso: React </h2>
            <h2>Autor: Franco Menichetti</h2>
            <h2>Profesor: Fernando Herrera</h2>

            <AddCategory
                //setCategories ={ setCategories }
                onNewCategory={event => onAddCategory(event)}
            />


            {
                categories.map(category =>
                    <GiftGrid
                        key={category}
                        category={category} />)
            }


        </>
    )
}
