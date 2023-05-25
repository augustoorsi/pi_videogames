import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Detail.module.css"
import getDetail from "./getDetail";

const Detail =()=>{
    const {pathname}  = useLocation()
    const id = pathname.slice(8)
    
    
    const [videogame, setVideogame]= useState({})
    
    const videogameDetail = async()=>{
        const detail = await getDetail(id)
        console.log(detail);
        setVideogame(detail)}

    useEffect(()=>{
        videogameDetail()
    },[id])
    
    return(
        <div>
            {videogame.created_db? <Link to={`/edit/${videogame.id}`}><button>EDIT</button></Link>:""}
            <h1>ID: {videogame?.id}</h1>
            <h1>NAME: {videogame?.name}</h1> 
            <img className={style.img} src={videogame?.image} alt={videogame.name}/>
            {videogame.created_db? <p>{videogame.description}</p>  :<p dangerouslySetInnerHTML={ {__html: videogame.description}}></p>}
            <h1>PLATFORMS: {videogame.created_db ? videogame.platforms?.map(platform => `[${platform}] `) :videogame.platforms?.map(platform => `[${platform.platform.name}] `)}</h1>
            <h1>RELEASED: {videogame.created_db ? videogame?.released.slice(0,10) : videogame?.released}</h1>
            <h1>RATING: {videogame?.rating}</h1>
            <h1>GENRES: {videogame.created_db ? videogame.genres?.map(genre => `[${genre.name}] `): videogame.genres?.map(genre => `[${genre}] `) }</h1> 
        </div>
    )
}


export default Detail;