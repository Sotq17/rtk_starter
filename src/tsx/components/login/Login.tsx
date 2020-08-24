// emotionを使うときはReactをimportする前に/** @jsx jsx */をつけてインポート
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// sliceから使用するactionをimport
import {
  editUsername,
  editPassword,
  fetchAsyncLogin,
  selectUser
} from './loginSlice'

import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { media_pc, media_pc_l } from '../../utils/constants'

// ユーザー/パスワードを入力してAPI通信後のページ遷移を想定
// * 現在APIはないので何を送っても200になる
const login = () => {
  // 一時的な保持はuseStateを使い各コンポーネントで行う
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  //   storeに保存されている情報を変数にいれる
  const user = useSelector(selectUser)

  const handleUserNameInput = (e: any) => {
    setUserName(e.target.value)
  }
  const handlePasswordInput = (e: any) => {
    setPassWord(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // importしてきたactionをdispatchする
    dispatch(editUsername(userName))
    dispatch(editPassword(passWord))
    dispatch(fetchAsyncLogin())
    setUserName('')
    setPassWord('')
  }

  //   Loginを検知してページ遷移
  useEffect(() => {
    if (user.isLogin === true) {
      history.push('/top')
    }
  }, [user])

  return (
    <div>
      <h1 css={title}>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleUserNameInput}
          placeholder="user"
        ></input>

        <input
          type="text"
          value={passWord}
          onChange={handlePasswordInput}
          placeholder="pass"
        ></input>

        <button onClick={handleSubmit}>LogIn</button>
      </form>
    </div>
  )
}

const title = css({
  color: 'pink',
  `@media(min-width: ${media_pc}px)`: {
    color: 'orange'
  }
})

export default hot(module)(login)
