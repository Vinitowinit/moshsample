import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props) {

    return (
            <tr>
                <td>
                    <Link to= {`/movies/${props.id}`} >
                        {props.title}
                    </Link>
                </td>
                <td>
                    {props.genre}
                </td>
                <td>
                    {props.year}
                </td>
                <td>
                    <button 
                    style = {{"color":"red"}}
                    onClick ={() => props.onPush(props.movie)}>   
                    Delete 
                    </button> 
                </td>
            </tr>
    )
}

export default Movie;