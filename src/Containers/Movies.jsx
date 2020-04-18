import React, {Component} from 'react';
import axios from 'axios';
import Movie from '../Component/Movies/Movie';
import { NavLink } from 'react-router-dom';
import config from "../config.json";

class Movies extends Component {
    constructor (){
        super();
        this.state ={
            movies: []
        }
    }

    filterResults = res => {
       console.log("method pushed")
    }

    async componentDidMount () {
        const { data } = await axios.get(config.apiUrl)
        this.setState({movies:data})
        console.log(this.state.movies)
    }

    handleDelete = async movie => {
        console.log(movie, "handleDelete")
        const originalMovies = [...this.state.movies]
        // Take movie id and remove movie id from the array list
        const movies = originalMovies.filter(oMovie => movie._id != oMovie._id) 
        //This is the approach to deletfe something form an internal api route 
        this.setState({movies})
        const duplicate ={...movie}

        try {
            await axios.delete( config.apiUrl + "/" + duplicate._id)
            console.log("Deleted")
            throw new Error("Here you go!")
        }
        catch {
            alert("Sorry something did not work as attended")
            this.setState({ movies: originalMovies })
        }
        console.log(movies, movie )
    }

    render (){
        const Value = this.state.movies.map((mov, index) => {
            return (
                <Movie 
                key={index} 
                id={mov._id} 
                title = {mov.title} 
                year= {mov.numberInStock} 
                genre= {mov.genre.name}
                movie= {mov}
                onPush = {this.handleDelete}
                 />
            )
        })

        
        return (
            <div>
                <h1 className = "title"> Movies </h1>
                <NavLink to= "/newmovie">
                    <button type="button" className="btn btn-primary">NewMovie</button> 
                </NavLink>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Value}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Movies;
