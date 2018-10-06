import React, { Component } from 'react';
import Login from './components/login';
import Profile from './components/profile';
import LandingPage from './components/LandingPage';
import PostInfo from './components/PostInfo';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Actions';
import './css/style.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchPosts();
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={LandingPage} />
            <Route exact path="/newpost" component={PostForm}/>
            <Route exact path="/post/:id" component={PostInfo} />
            <Route exact path="/posts" component={Posts}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
