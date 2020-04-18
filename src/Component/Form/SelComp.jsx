import {apiUrl} from "../../config.json";
import axios from 'axios';

    export async function getGenres() {
       const {data} = await axios.get("http://localhost:3900/api/genres")
       const genres = data.map( d => {
          return(
            d.name
         )})
       return (
         genres
       )
    }

   export async function getMovie(id){
      const {data} = await axios.get("http://localhost:3900/api/movies/" + id)
      return data
   }

   export async function saveMovie(movie) {
      console.log(movie)
      const cMovie = {...movie}
      cMovie.numberInStock = 2
      cMovie.dailyRentalRate = 3
      delete cMovie.year
      console.log(cMovie)
      await axios.post("http://localhost:3900/api/movies",cMovie)
   }

    

