import axios from "axios";

const searchImages=async(term)=>{
  const response= await axios.get('https://api.unsplash.com/search/photos',{
    headers:{

        Authorization: 'Client-ID MW88Aj1XS9atRABlaZTigNf9SrslgQOW5cVJAioqGp8'
    },
    params:{
query: term,
    }
   }) 
   console.log(response.data.results)
   return response.data.results
}
export default searchImages