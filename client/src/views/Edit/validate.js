const validate =(state,videogames)=>{
    const errors={}

    if(!state.name)errors.name = "Name required"
    

    if (!state.image.endsWith(".jpg"))errors.image = "It should be a .JPG"


    if(!state.description) errors.description = "Description required"

    if(state.platforms.length <= 0) errors.platforms = "One platform is required"
    
    if(isNaN(state.rating)) errors.rating ="Should be a number"
    else if(state.rating > 5) errors.rating = "Max rating is 5"
    else if(state.rating <= 0) errors.rating ="Min rating can`t be 0 or bellow"

    if(state.genres.length <= 0) errors.genres = "One genre is required"

    return errors
}

export default validate