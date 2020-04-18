import React, {Component} from 'react';
import axios from 'axios';


class Customers extends Component {
    constructor (){
        super();
        this.state = {
            movies:[]
        }
    }

    async componentDidMount () {
        const { data:movies } = await axios.get('http://localhost:3900/api/movies')
        console.log(movies)
        this.setState(movies)
    }

    render (){
        
        return (
            <div>
                <h1> Customers </h1>
                {this.state.movies}
            </div>
        )
    }

}

export default Customers;
