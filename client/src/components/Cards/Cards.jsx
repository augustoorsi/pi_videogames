import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ()=>{

	const allVideogames = useSelector(state=> state.videogames)


    return(
        <div className={style.container}>
            {allVideogames.map(videogame=>{
                return <Card
                    id={videogame.id}
                    name={videogame.name}
                    image={videogame.image}
                    genres={videogame.genres}
                />
            })}
        </div>
    )
}

export default Cards;