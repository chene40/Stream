import React from 'react'
import { Field, reduxForm } from 'redux-form'           // component, function: reduxForm very similar to connect function

class StreamCreate extends React.Component{

    renderError({error, touched}){      // meta.error, meta.touched
        if (touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ( {input, label, meta} ) => {      // formProps.input, formProps.label, formProps.meta
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>     { /* Takes all the props out and add them as key-value pairs */ }
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues)
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )  
    }
}

const validate = (formValues) => {

    const errors = {}

    if (!formValues.title){
        errors.title ='You must enter a title'
    }
    if (!formValues.description){
        errors.description ='You must enter a description'
    }

    return errors
}

// reduxForm takes a single object containing all the configurations
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)