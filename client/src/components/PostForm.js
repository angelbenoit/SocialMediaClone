import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import * as actions from '../Actions';
import { connect } from 'react-redux';

class PostForm extends Component {
    //render form with correct fields
    renderField(field) {
        const { meta: { touched, error } } = field;
        console.log(field);
        return (
            <div className="form">
                <label className="form__label">{field.label}</label>
                {
                    field.label === "Title" ?
                    <input className="form__input" type="text" {...field.input} /> :
                    <textarea type="text" className="form__input" />
                }

                <div className="formError">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    submitForm(values){
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="sessionForm" onSubmit={handleSubmit(this.submitForm)}>
                <Field
                    name="title"
                    component={this.renderField}
                    label="Title"
                />
                <Field
                    name="body"
                    component={this.renderField}
                    label="Body"
                />
                <button type='submit' className="formSubmit">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title)
        errors.title = "Enter a subject";

    if(!values.body)
        errors.body = "Enter minutes";

    return errors;
}

export default reduxForm({
    form: "PostsNew",
    fields: ['title', 'body'],
    validate,
})(connect(null, actions)(PostForm));