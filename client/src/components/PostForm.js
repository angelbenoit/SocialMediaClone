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
                    <input type="text" className="form__input"{...field.input} /> :
                    <textarea type="text" className="form__input" {...field.input} />
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
            <form className="formBody" onSubmit={handleSubmit(this.submitForm)}>
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
                <a href="" type='submit' className="btn btn--white u-center-text formSubmit">Post</a>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title)
        errors.title = "Enter a title";

    if(!values.body)
        errors.body = "Enter body text";

    return errors;
}

export default reduxForm({
    form: "PostsNew",
    fields: ['title', 'body'],
    validate,
})(connect(null, actions)(PostForm));