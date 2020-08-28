import React from 'react'
import { css } from '@emotion/core'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores'
import GlobalStyle from './style/GlobalStyle'
import 'react-hot-loader'

const app = document.getElementById('app')
// page
import Top from './views/pages/top/Top'
import Login from './views/pages/login/Login'

// react-router-domでページ遷移
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/top" component={Top} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  app
)

if (module.hot) {
  module.hot.accept()
}
