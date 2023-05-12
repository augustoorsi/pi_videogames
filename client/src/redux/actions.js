import axios from "axios"


export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"


export const getAllVideogames =  ()=>{
    return async function(dispatch){
        const data = await axios.get("http://localhost:3001/videogames")
        const videogames =  [...data.data]
        dispatch({type: GET_ALL_VIDEOGAMES, payload: videogames})
    }
}

