
import { GiftItem } from "./GiftItem";
import { useFetchGift } from "../hooks/useFetchGift";


export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGift(category)

    return (
        <>
            <h3> {category} </h3>

            {
                isLoading && <h2>Cargando...</h2> //Lo mismo que abajo abreviado
            }
            {/* {
                isLoading
                    ? <h2>Cargando...</h2>
                    : null
            } */}


            <div className="card-grid">
                {
                    images.map((image) => (
                        <GiftItem
                            key={image.id}
                            // title={ image.title }
                            //  url={ image.url } 
                            {...image} /> //con esta sintaxis le mandamos todas las prop al elemento
                    ))
                }
            </div>

        </>
    )
}
