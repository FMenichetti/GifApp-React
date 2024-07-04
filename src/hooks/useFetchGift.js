import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";




export const useFetchGift = ( category ) => {


    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState([ true ]);

    const getImage = async () => { //Funcion async para obtener img 
        const images = await getGift(category);
        setImages(images);
        setIsLoading( false );
    }

    useEffect(() => { //Este hook renderiza lo que tengo en mi funcion por unica vez
        getImage();

    }, [])


    return {
        //Cuando tengo una propiedad que apunta a una variable del mismo nombre se puede dejar un solo nombre
        images, //images : images
        isLoading //isLoading : isLoading
        
    }
}
