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
        <div className={style.container} key={props.id}>
            {props.created? <button className={style.button} onClick={()=>handleOnClick(props.id)}>x</button>:""}
            <Link className={style.link} to={`/detail/${props.id}`} >
            <h2 className={style.name}>{props.name}</h2>
            </Link>
            {props.created ?
            <h4 className={style.genres}>{props.genres.map(genre => `[${genre.name}] `)}</h4>
            : <h4 className={style.genres}>{props.genres.map(genre => `[${genre}] `)}</h4>}
            <img className={style.img} src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;

