import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { useDispatch } from "react-redux";
import { deleteVideogame } from "../../redux/actions";

const Card = (props)=>{
    const dispatch = useDispatch()

    const handleOnClick = (id)=>{
        dispatch(deleteVideogame(id))
    }


    return(
        <div key={props.id}>
            {props.created? <button onClick={()=>handleOnClick(props.id)}>x</button>:""}
            <Link to={`/detail/${props.id}`} >
            <h2>{props.name}</h2>
            </Link>
            {props.created ?
            <h4>{props.genres.map(genre => `[${genre.name}] `)}</h4>
            : <h4>{props.genres.map(genre => `[${genre}] `)}</h4>}
            <img className={style.img} src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;

