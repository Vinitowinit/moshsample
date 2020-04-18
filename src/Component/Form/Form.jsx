import React, { Component } from 'react'
import Joi from 'joi-browser';

export class Form extends Component {
    constructor (){
        super();
        this.state={
            data:{},
            errors:{}
        }
    }

     //validating inputs to schema for submite 
     validate = () => {
        console.log(this.state.errors)
        const { errors } = this.state;
        console.log("validate third")
        console.log(errors)
        const abort = {abortEarly:false}
        const result = Joi.validate(this.state,this.schema, abort)
        console.log(result)
        console.log(errors)
        if(!result.error) {
            return null
        }
        for(let i of result.error.details) {
            const attribute = i['path']
            errors[attribute] = i['message']
        }
        return errors
    }

    //validating username/password input fields for dynamic error showing
    validateInfo = ({ name, value }) => {
        //Purpsoe of this information is for what?
        console.log("validateInfo second ")
        const obj = { name: value };
        const schema = { name : this.schema[name] };
        const { error } = Joi.validate( obj ,schema);
        return error ? error.details[0].message : null
    }

    //Form button submission
    formSubmit= e => {

        e.preventDefault();
        const errors= this.validate();
        if(errors){
            this.setState({errors})
        }
        this.doSubmit();
    }

    //Handling the text area 
    onHandle = e => {
        const errors = {... this.state.errors}
        const target = e.target
        console.log("Before")
        const errorVal = this.validateInfo(target);
        console.log("fourth")
        console.log(errorVal)
        if(errorVal){
            errors[target.name] = errorVal;
        } else {
            errors[target.name] = "";
        }
        const {value, name} = e.target;
        const data = {...this.state.data}
        data[name]= value;
        console.log("onHandleSetState")
        this.setState({data, errors})

    }

}
export default Form
