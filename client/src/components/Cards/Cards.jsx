import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ({currentVideogames})=>{



    return(
        <div className={style.container}>
            {currentVideogames.map(videogame=>{
                return <Card key={videogame.id}
                    id={videogame.id}
                    name={videogame.name}
                    image={videogame.image}
                    genres={videogame.genres}
                    created={videogame.created_db}
                />
            })}
        </div>
    )
}

export default Cards;