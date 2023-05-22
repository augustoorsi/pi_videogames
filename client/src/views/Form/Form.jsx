import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, postVideogame } from "../../redux/actions";
import validate from "./validate";

const Form = () => {

    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.genres)
    const videogames = useSelector((state)=> state.videogames)

    const [errors, setErrors] = useState({})

    const [createVideogame, setCreateVideogame] = useState({
        name: "",
        image: "",
        description: "",
        platforms: [],
        released: "",
        genres:[],
        rating:""
    })
    

    const platformsArray = ["PC", "PS4", "PS5", "XBOX 360", "XBOX SERIES", "SWITCH"]

    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setCreateVideogame({...createVideogame, [name]: value})
        setErrors(validate({...createVideogame, [name]: value},videogames))
    }
    const handleGenres = (event) =>{
        const value = event.target.value
        setCreateVideogame({...createVideogame, genres:[...createVideogame.genres, value]})
        setErrors(validate({...createVideogame, genres:[...createVideogame.genres, value]},videogames))
    }

    const handlePlatforms = (event) =>{
        const value = event.target.value
        setCreateVideogame({...createVideogame, platforms:[...createVideogame.platforms, value]})
        setErrors(validate({...createVideogame, platforms:[...createVideogame.platforms, value]},videogames))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        setErrors(validate(createVideogame,videogames))
        console.log(errors);
        if(!(errors.name || errors.image || errors.description || errors.platforms || errors.rating || errors.genres)){
            dispatch(postVideogame(createVideogame))
            dispatch(getAllVideogames())
            setCreateVideogame({
                name: "",
                image: "",
                description: "",
                platforms: [],
                released: "",
                genres:[],
                rating:""
            })
        }
        else alert("Null or invalid information")
    }
    
    return (
        <form onSubmit={(event)=> handleSubmit(event)}>
            <label name="NAME">
                NAME:
                <input onChange={(event)=> handleChange(event)} type="text" name="name" value={createVideogame.name} />
            </label>
            {errors.name && <spam>{errors.name}</spam>}
            <br />
            <label name="IMAGE">
                IMAGE:
                <input onChange={(event)=> handleChange(event)} type="text" name="image" value={createVideogame.image} />
            </label>
            {errors.image && <spam>{errors.image}</spam>}
            <br />
            <label name="DESCRIPTION">
                DESCRIPTION:
                <input onChange={(event)=> handleChange(event)} type="text" name="description" value={createVideogame.description}/>
            </label>
            {errors.description && <spam>{errors.description}</spam>}
            <br />
            <label name="PLATFORMS">
                PLATFORMS:
                <select onChange={(event)=>handlePlatforms(event)} name="platforms">
                    <option></option>
                    {platformsArray.map(platform => <option key={platform} name={platform}> {platform}</option>)}
                </select>
                {createVideogame.platforms.map(platform=><p key={platform}>{`[${platform}]`}</p>)}
            </label>
            {errors.platforms && <spam>{errors.platforms}</spam>}
            <br />
            <label name="RELEASED">
                RELEASED:
                <input onChange={(event)=> handleChange(event)} name="released" value={createVideogame.released} type="date" />
            </label>
            {errors.platforms && <spam>{errors.platforms}</spam>}
            <br />
            <label name="RATING">
                RATING:
                <input onChange={(event)=> handleChange(event)} name="rating" value={createVideogame.rating} type="text" />
            </label>
            {errors.rating && <spam>{errors.rating}</spam>}
            <br />
            <label name="GENRES">
                GENRES:
                <select onChange={(event)=>handleGenres(event)} name="genres">
                    <option></option>
                    {allGenres.map(genre => <option name={genre} key={genre} >{genre}</option>)}
                </select>
            </label>
            {errors.genres && <spam>{errors.genres}</spam>}
            {createVideogame.genres.map(genre=><p key={genre}>{`[${genre}]`}</p>)}
            <br />
            <label name="SUBMIT">
                <button>ADD VIDEOGAME</button>
            </label>
        </form>
    )
}


export default Form;