import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { NavLink, withRouter } from 'react-router-dom';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class PostForm extends Component {
    //render form with correct fields
    renderField(field) {
        const { meta: { touched, error } } = field;
        //console.log(field);
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


    render() {
        const { handleSubmit, history, fetchPosts } = this.props;
        //console.log(this.props);

        function submitForm(values){
            console.log(values)
            axios({
                method: "post",
                url: '/api/create_post',
                headers: {authorization: localStorage.getItem("token")},
                data: values
            })
             .then(fetchPosts())
             .then(history.push("/posts"))
            fetchPosts();
        }
        return (
            <div className="formBackground">
                <div className="formTitle u-center-text">
                    <h1>New Post Form</h1>
                </div>
                <form className="formBody" onSubmit={handleSubmit(submitForm)}>
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

                        <button className="btn_nonlink btn_nonlink--white formRedirect__back formSubmit u-center-text">
                            Post
                        </button>
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

export default withRouter(reduxForm({
    form: "PostsNew",
    fields: ['title', 'body'],
    validate,
})(withRouter(connect(null, actions)(PostForm))));