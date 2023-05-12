import { GET_ALL_VIDEOGAMES } from "./actions";

const initialState = {
    videogames: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
		case GET_ALL_VIDEOGAMES:
			return {...state, videogames: payload };
        default:
            return { ...state};
    }
}

export default rootReducer;