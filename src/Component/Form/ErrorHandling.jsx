import React, { Component } from 'react'
import Joi from 'joi-browser';

export class ErrorHandling extends Component {
    
    //validating inputs to schema for submite 
    validate = () => {
        const abort = {abortEarly:false}
        const { errors } = this.state;
        const result = Joi.validate(this.state,this.schema, abort)
        console.log(result)
        if(!result.error) {
            return 
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
        const obj = { name: value };
        const schema = { name : this.schema[name] };
        const { error } = Joi.validate( obj ,schema);
        return error ? error.details[0].message : null
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ErrorHandling
