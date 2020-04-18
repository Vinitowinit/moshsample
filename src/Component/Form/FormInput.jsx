import React, { Component } from 'react'

export class FormInput extends Component {

    render() {
        const { label,name,value, type, onChange,genres } =this.props;
        console.log(genres)

        
            if( name === "genre"){
                return(
                    <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                        <select 
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange} 
                            className="form-control" 
                        >
                            <option value= {"Thriller"}> Thriller</option>
                            <option value= {"Action"}>   Action </option>
                            <option value= {"Comedy"}>   Comedy </option>
                            <option value= {"Romance"}>  Romance </option>
                        </select>
                    </div>
                )

            } else {
                return (
                 <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                        <input 
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange} 
                            className="form-control" 
                        />
                    </div>
                )
            }    
    }
}

export default FormInput
