import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class CommentForm extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        return (
            <div className="form form__comment">
                <label className="form__label--black">{field.label}</label>
                <input type="text" className="form__input--black"{...field.input} />

                <div className="form__error--black">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }


    render() {
        const { handleSubmit, fetchSpecifiedPostData, postId, reset } = this.props;

        function submitForm(values){
            const comment = values;
            comment['postId'] = postId;
            axios({
                method: "post",
                url: '/api/postComment',
                headers: {authorization: localStorage.getItem("token")},
                data: values
            })
                .then(fetchSpecifiedPostData(postId))
                .then(reset());
            fetchSpecifiedPostData(postId);
        }

        return (
            <form className="formBody" onSubmit={handleSubmit(submitForm)}>
                <Field
                    name="comment"
                    component={this.renderField}
                    label="Comment"
                />
                <button className="btn_nonlink btn_nonlink--white formRedirect__back formSubmit u-center-text">
                    Post Comment
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