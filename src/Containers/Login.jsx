import React from 'react';
import Joi from 'joi-browser';
import FormInput from '../Component/Form/FormInput';
import Form from '../Component/Form/Form';


export default class Login extends Form {
    constructor() {
        super();
        this.state= {
            data: { 
                email: "", 
                password:"",
            },
            errors: {
                email: "",
                password:""
            }
        }
    }

    //Schema needed for Joi Validation 
    schema = {
        email: Joi.string().min(5).required(),
        password: Joi.string().min(5).required()
    };

    //Control the AJAX specific calls 
    doSubmit = () => {
        //fill in the information here 
        console.log("Submit Ready")
    }


   //Highly specific to Login Field
    subError = (val,errors) => {
        if (val == 'email') {
            return (
                <React.Fragment>
                { errors[val] ? 
                    <div className= "alert alert-danger">{errors.email}</div>  :
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    }
                </React.Fragment>)
            }
        else {
            return(
                <React.Fragment>
                { errors[val] && 
                        <div className= "alert alert-danger">{errors.password}</div> 
                    }
                </React.Fragment>)
        }
    }



    render() {

        const styles = {
            margin: "20px",
            padding: "20px",
        }

        const { data, errors } = this.state;
        return (
                <div className="card" style={styles}>
                    <form onSubmit={this.formSubmit}>
                        <FormInput
                            type= {"email"}
                            name= {"email"}
                            value= {data.email}
                            onChange={this.onHandle}
                            label= {"Email Address"}
                        />
                        {this.subError("email",errors)}
                        <FormInput
                            type= {"password"}
                            name= {"password"}
                            value= {data.password}
                            onChange={this.onHandle}
                            label= {"Password"}
                        />
                        {this.subError("password",errors)}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            )
        }
}
