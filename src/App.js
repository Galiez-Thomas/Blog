import React from 'react';
import './App.css';
import Header from './Components/header';
import Blogusers from './Components/BlogUsers';
import Blogposts from './Components/BlogPosts';
import Blogcomments from './Components/BlogComments';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="row">
      <Header />
      <div className="list col-sm-12">
        <Router>
          <Switch>
            <Route exact path="/" component={Blogusers} />
            <Route path="/posts" component={Blogposts} />
            <Route path="/comments" component={Blogcomments} />
          </Switch>
        </Router>
      </div>

    </div>

  )
}

export default App;