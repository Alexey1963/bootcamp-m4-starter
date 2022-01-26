import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    const {favoriteListId} = this.props;
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path={`/list/:${favoriteListId}`} exact component={ListPage} />
        </Switch>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      favoriteListId: state.favoriteMoviesId
  }
}

export default connect(mapStateToProps, null)(App);

