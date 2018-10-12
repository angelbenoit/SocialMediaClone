import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class CommentForm extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        return (
            <div className="form">
                <label className="form__label">{field.label}</label>
                <input type="text" className="form__input"{...field.input} />

                <div className="form__error">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }


    render() {
        const { handleSubmit } = this.props;

        function submitForm(values){
            console.log(values)
        }
        return (
            <form className="formBody" onSubmit={handleSubmit(submitForm)}>
                <Field
                    name="comment"
                    component={this.renderField}
                    label="Comment"
                />
                <button className="btn_nonlink btn_nonlink--white formRedirect__back formSubmit u-center-text">
                    Post
                </button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.comment)
        errors.comment = "Enter a comment";

    return errors;
}
export default reduxForm({
    form: "CommentPost",
    fields: ['comment'],
    validate,
})(connect(null, actions)(CommentForm));