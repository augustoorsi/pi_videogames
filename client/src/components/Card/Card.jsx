import style from "./Card.module.css"

const Card = (props)=>{
    return(
        <div key={props.id}>
            <h2>{props.name}</h2>
            <h4>{props.genres.map(e => `[${e}] `)}</h4>
            <img className={style.img} src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;

