import { DELETE_VIDEOGAME, FILTER_BY_GENRE, FILTER_BY_ORIGIN, GET_ALL_GENRES, GET_ALL_VIDEOGAMES, ORDER, POST_VIDEOGAME, SEARCH_BY_NAME } from "./actions";

const initialState = {
    videogames: [],
    genres:[],
    allVideogames: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {    
        
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: payload,
                allVideogames: payload
            }

        case GET_ALL_GENRES:
            return{...state, genres: payload}

            
        case FILTER_BY_ORIGIN:
            const videogamesOrigin = (payload === "CREATED")? state.allVideogames.filter(videogame => videogame.created_db) : state.allVideogames.filter(videogame => !videogame.created_db)
            return{
                ...state,
                videogames: payload === "ALL"? state.allVideogames : videogamesOrigin
            }

        case FILTER_BY_GENRE:
            const videogamesFiltered = (payload === "All")? state.allVideogames : state.allVideogames.filter(videogame => videogame.genres.includes(payload))
            return{
                ...state,
                videogames: [...videogamesFiltered]
            }

        case ORDER:
            return {
                ...state,
                videogames: [...payload]
            }

        case SEARCH_BY_NAME:
            return{
                ...state,
                videogames: [...payload]
            }

        case POST_VIDEOGAME:
            return{
                ...state,
                videogames: [payload,...state.videogames],
                allVideogames: [payload,...state.allVideogames]
            }

        case DELETE_VIDEOGAME:
            return{
                ...state,
                videogames: [...state.videogames.filter(videogame=> videogame.id !== payload)],
                allVideogames: [...state.allVideogames.filter(videogame=> videogame.id !== payload)]
            }

        default:
            return { ...state};
    }
}

export default rootReducer;