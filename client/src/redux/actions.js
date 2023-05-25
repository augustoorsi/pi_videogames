import axios from "axios"


export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const ORDER = "ORDER"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const DELETE_VIDEOGAME= "DELETE_VIDEOGAME"
export const EDIT_VIDEOGAME = "EDIT_VIDEOGAME"


export const getAllVideogames =  ()=>{
    return async function(dispatch){
        const data = await axios.get("http://localhost:3001/videogames")
        const videogames =  [...data.data]
        dispatch({type: GET_ALL_VIDEOGAMES, payload: videogames})
    }
}

export const getAllGenres = ()=>{
    return async function(dispatch){
        const data = await axios.get("http://localhost:3001/genres")
        const genres = [...data.data]
        dispatch({type:GET_ALL_GENRES, payload:genres})
    }
}

export const filterByGenre = (payload)=>{
    return {type:FILTER_BY_GENRE, payload:payload}
}

export const filterByOrigin = (payload)=>{
    return{type:FILTER_BY_ORIGIN, payload:payload}
}

export const videogamesOrdered = (payload) =>{
    return{type: ORDER, payload: payload}
}

export const searchByName = (name)=>{
    return async function(dispatch){
        const data = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        const videogames = [...data.data]
        dispatch({type: SEARCH_BY_NAME, payload: videogames})
    }
}

export const postVideogame = (videogame)=>{
    return async function(dispatch){
        await axios.post("http://localhost:3001/videogames", videogame)
        dispatch({type: POST_VIDEOGAME, payload: videogame})
    }
}

export const deleteVideogame = (id)=>{
    return async function(dispatch){
        await axios.delete(`http://localhost:3001/videogames/${id}`)
        dispatch({type: DELETE_VIDEOGAME, payload:id })
    }
}

export const editVideogame = (id,videogameEdited)=>{
    return async function(dispatch){
        await axios.put(`http://localhost:3001/videogames/${id}`,videogameEdited)
        dispatch({type:EDIT_VIDEOGAME, payload:videogameEdited})
    }
}