import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores'
import GlobalStyle from './components/styledComponent/GlobalStyle'
const app = document.getElementById('app')
// page
import Top from './components/top/Top'
import Login from './components/login/Login'

// react-router-domでページ遷移
ReactDOM.render(
  <Provider store={store}>
    <p>ssaa</p>
    <Router>
      <GlobalStyle />
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
