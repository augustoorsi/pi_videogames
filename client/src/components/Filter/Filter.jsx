import { useDispatch, useSelector } from "react-redux"
import style from "./Filter.module.css"
import { filterByGenre, filterByOrigin, videogamesOrdered } from "../../redux/actions"
import { useState, useEffect } from "react"
import { orderedByName, orderedByRating } from "./handlerFilter"

const Filter = ({paginated}) => {
    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres)

    const [orderBy, setOrderBy] = useState("");
    const [orderType, setOrderType] = useState("")

    useEffect(() => {
        if (!orderBy) {
            setOrderType("")
        }
    }, [orderBy])

    const handleGender = (event) => {
        dispatch(filterByGenre(event.target.value))
        paginated(1)
        setOrderBy("")
        setOrderType("")
    }

    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
        paginated(1)
        setOrderBy("")
        setOrderType("")
    }

    const nameOrRating = (event) => {
        setOrderBy(event.target.value)
        paginated(1)
        setOrderType("")
    }

    const handleOrder = (event) => {
        setOrderType(event.target.value)
    }

    const applyOrder = () => {
        let orderedVideogames = [];
        if (orderBy === "Name") {
            orderedVideogames = orderedByName(orderType, videogames)
        } else if (orderBy === "Rating") {
            orderedVideogames = orderedByRating(orderType, videogames)
        }
        dispatch(videogamesOrdered(orderedVideogames))
        paginated(1)
    }

    useEffect(() => {
        if (orderType) {
            applyOrder()
        }
    }, [orderType])


    return (
        <div className={style.container} >
            <br />
            <div className={style.origin}>
                <label>
                    All
                    <input onChange={(event) => handleOrigin(event)} type="radio" name="AllOrCreated" value="ALL" defaultChecked />
                </label>
                <label>
                    API
                    <input onChange={(event) => handleOrigin(event)} type="radio" name="AllOrCreated" value="API" />
                </label>
                <label>
                    Created
                    <input onChange={(event) => handleOrigin(event)} type="radio" name="AllOrCreated" value="CREATED" />
                </label>
            </div>
            <br />
            <br />
            <div className={style.genres}>
                GENRES:
                <select onChange={(event) => handleGender(event)}>
                    <option value="All">All Genres </option>
                    {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
            </div>
            <br />
            <br />
            <div className={style.by}>
                BY:
                <br />
                <label className={style.label}> 
                    Name
                    <input checked={orderBy === "Name"} onChange={(event) => nameOrRating(event)} value="Name" type="radio" name="OrderBy" ></input>
                </label>
                <label className={style.label}>
                    Rating
                    <input checked={orderBy === "Rating"} onChange={(event) => nameOrRating(event)} value="Rating" type="radio" name="OrderBy"></input>
                </label>
            </div>
            <br />
            <br />
            <div className={style.order}>
                ORDER:
                <br />
                <label className={style.label}> 
                    Ascending
                    <input checked={orderType === "Ascending"} onChange={(event) => handleOrder(event)} value="Ascending" type="radio" name="Order" ></input>
                </label>
                <label className={style.label}>
                    Descending
                    <input checked={orderType === "Descending"} onChange={(event) => handleOrder(event)} value="Descending" type="radio" name="Order"></input>
                </label>
            </div>
        </div>
    )
}

export default Filter