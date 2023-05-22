import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";


const SearchBar = () => {

    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    console.log(name)

    const handleOnClick = (event) => {
        event.preventDefault()
        dispatch(searchByName(name))
        setName("")
    }

    return (
        <div>
            <label>
                SEARCH VIDEOGAME:
                <input type="text" value={name} onChange={(event) => handleOnChange(event)} placeholder="Ej: Counter-Strike..." />
                <button type="submit" onClick={(event)=>handleOnClick(event) }>SEARCH</button>
            </label>
        </div>
    )
}

export default SearchBar;