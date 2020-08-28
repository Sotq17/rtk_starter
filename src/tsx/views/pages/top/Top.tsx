import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../../stores/slices/userSlice'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// parts
import TopList from './TopList'
import Header from '../../components/block/Header'
import Footer from '../../components/block/Footer'
import ScrollTop from '../../components/modules/ScrollTop'
import { Button } from '../../components/atoms/Button'
// style
import { TopTitle } from '../../../style/pages/Top'

const Top = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout(''))
    history.push('/')
  }

  return (
    <div>
      <Header />
      <h1 css={TopTitle}>TOP</h1>
      {user ? (
        <div>
          <p>welcome</p>

          <p>{user.auth.username}</p>
        </div>
      ) : null}

      <Button
        onClick={handleLogout}
        name="LogIn"
        color="#ffffff"
        bgColor="pink"
      />

      <TopList />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default hot(module)(Top)
