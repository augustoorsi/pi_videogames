import axios from "axios"

const getDetail = async (id)=>{
    const data = await axios.get(`http://localhost:3001/videogames/${id}`)
    console.log(data.data);
    return  data.data
}

export default getDetail