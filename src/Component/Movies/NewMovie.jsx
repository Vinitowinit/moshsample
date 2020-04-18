import React, { Component } from 'react';
import Form from '../Form/Form';
import Joi from 'joi-browser';
import FormInput from '../Form/FormInput';
import {getGenres, saveMovie} from '../Form/SelComp';

class NewMovie extends Form {
    constructor (){
      super();
      this.state= {
          data: {
            title: "",
            genres: [],
            genre:"thriller",
            year: "",
          },
          errors: {
            title: "",
            genre:  "",
            year: "",
          }
        }
     }

     async componentDidMount() {
         const data = {...this.state.data}
         data.genre = await getGenres();
         this.setState({data})
     }
  
    //Schema needed for Joi Validation 
    schema = {
        title: Joi.string().min(5).required(),
        genre: Joi.string().required(),
        year: Joi.string().required(),
    };

    //Control the AJAX specific calls 
    doSubmit = async () => {
        console.log(this.state.data)
        await saveMovie(this.state.data)
        console.log("Submit Done")
        this.props.history.push("/movie")
    };

    //Highly specific to Login Field
    subError = (val,errors) => {
            return (
                <React.Fragment>
                    { errors[val] ? 
                        <div className= "alert alert-danger">{errors[val]}</div> : null
                    }
                </React.Fragment>
                )
            }

    render() {

        const styles = {
            margin: "20px",
            padding: "20px",
        }

        const { data, errors } = this.state

        return (
        <div>  
            <h1> Movie Form </h1>
            <div className="card" style={styles}>
                    <form onSubmit={this.formSubmit}>
                        <FormInput
                            type= {"text"}
                            name= {"title"}
                            value= {data.title}
                            onChange={this.onHandle}
                            label= {"Enter Title"}
                        />
                        {this.subError("title",errors)}
                        <FormInput
                            type={"text"}
                            name= {"genre"}
                            genres= {data.genres}
                            value= {data.genre}
                            onChange={this.onHandle}
                            label= {"Choose Genre"}
                        />
                        {this.subError("genre",errors)}
                        <FormInput
                            type= {"text"}
                            name= {"year"}
                            value= {data.username}
                            onChange={this.onHandle}
                            label= {"Enter Year"}
                        />
                        {this.subError("year",errors)}

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>
        )
    }
};

export default NewMovie;
