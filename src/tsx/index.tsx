import React from "react"
import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores'
import GlobalStyle from './style/GlobalStyle'
import 'react-hot-loader'

// page
import Top from './views/pages/top/Top'
import Login from './views/pages/login/Login'
import Entry from './views/pages/entry/Entry'

// store
import { selectLogin } from './stores/slices/loginSlice'


declare global {
  type FIXME = any
}
// css propsがないというtsエラーが出るため
declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any
  }
}

const app = document.getElementById('app')
// ログインしないと入れないルート
const PrivateRoute = (props: any) => {
  const user = useSelector(selectLogin)
  if (user.isLogin) {
    return <Route {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

// いつでも入れるルート
const GuestRoute = (props: any) => {
  return <Route {...props} />
}
// react-router-domでページ遷移
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <React.Fragment>
        <GuestRoute path="/entry" children={<Entry />} />
        <GuestRoute path="/login" children={<Login />} />
        <PrivateRoute path="/" children={<Top />} />
        </React.Fragment>
      </Switch>
    </Router>
  </Provider>,
  app
)

if (module.hot) {
  module.hot.accept()
}
