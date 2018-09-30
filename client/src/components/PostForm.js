import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
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

                <div className="form__error">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    submitForm(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="formBackground">
                <div className="formTitle u-center-text">
                    <h1>New Post Form</h1>
                </div>
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
                    <div className="formRedirect">
                        <NavLink className="btn btn--white formRedirect__back formSubmit u-center-text" to="/posts">
                            <i class="far fa-arrow-alt-circle-left formRedirect__icon"></i> Go back
                        </NavLink>
                        <NavLink className="btn btn--white u-center-text formSubmit u-center-text" to="/posts">
                            Post
                        </NavLink>
                    </div>
                </form>
            </div>

        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title)
        errors.title = "Enter a title";

    if (!values.body)
        errors.body = "Enter body text";

    return errors;
}

export default reduxForm({
    form: "PostsNew",
    fields: ['title', 'body'],
    validate,
})(connect(null, actions)(PostForm));