import React, {Component} from 'react';
import {getMovie} from '../Form/SelComp';




class SpecMovie extends Component {
    constructor (props){
        super(props);
        this.state ={
            result: {

            }
        }
    }

    async componentDidMount() {
        try {
            const data =await getMovie(this.props.match.params.id)
            console.log(data)
            this.setState({result:data})
            console.log(this.state.result)
        } 
        catch (ex) {
            if ( ex.response === 404) {
                this.props.history.replace("/not-found")
            }
        }
        
    }
    
    handleBack = () => {
        this.props.history.push("/movies")
    }
        render () {
            const { result } = this.state
            return (
                <div>
                    <div>
                        <h1> Movie Form </h1> 
                        {this.props.match.params.id}
                    </div>
                    <div>
                        <h1> {result.title} </h1>
                    </div>
                    <button onClick={this.handleBack}> Back </button>
                </div>
            )

            }
}

export default SpecMovie;
