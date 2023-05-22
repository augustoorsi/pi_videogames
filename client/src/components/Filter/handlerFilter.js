export const orderedByName = (orderType, videogames)=>{
    const orderedVideogames=(orderType === "Descending")?
    videogames.sort((a,b)=>{
        if (a.name>b.name) {
            return -1;
        }
        if (a.name<b.name) {
            return 1;
        }
            return 0;
    })
    :
    videogames.sort((a,b)=>{
        if (a.name<b.name) {    
            return -1;
        }
        if (a.name>b.name) {
            return 1;
        }
        return 0;   
        })
    return orderedVideogames
}

export const orderedByRating = (orderType, videogames)=>{
    const orderedVideogames=(orderType === "Descending")?
    videogames.sort((a,b)=>{
        if (a.rating<b.rating) {    
            return -1;
        }
        if (a.rating>b.rating) {
            return 1;
        }
        
        return 0;
    })
    :
    videogames.sort((a,b)=>{
        if (a.rating>b.rating) {
            return -1;
        }
        if (a.rating<b.rating) {
            return 1;
        }
            return 0;
    })
    return orderedVideogames
}

