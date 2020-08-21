/** @jsx jsx */
// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../login/loginSlice'

import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { jsx, css } from '@emotion/core'
import TopList from './TopList'

import { hot } from 'react-hot-loader'

function Top() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout(''))
    history.push('/')
  }

  return (
    <div>
      <h1 css={title}>TOP</h1>
      {user ? (
        <div>
          <p>welcome</p>

          <p>{user.auth.username}</p>
        </div>
      ) : null}

      <TopList />
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default hot(module)(Top)

// emotion (css-in-Js)
const title = css({
  color: 'pink',
  '&:hover': {
    color: 'red'
  }
})
