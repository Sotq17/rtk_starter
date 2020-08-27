import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// sliceから使用するaction
import {
  editUsername,
  editPassword,
  fetchAsyncLogin,
  selectUser
} from '../../../stores/slices/userSlice'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'

// 使用するcomponent
import Header from '../../components/block/Header'
import Footer from '../../components/block/Footer'
import { Button } from '../../components/atoms/Button'

// 使用するstyle
import { LoginTitle } from '../../../style/pages/Login'
import { themeClr } from '../../../style/variables'

const Login = () => {
  // 一時的な保持は各コンポーネントで行う
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
    // importしたactionをdispatchする
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
      <Header />
      <h1 css={LoginTitle}>Login Page</h1>

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

        <Button
          onClick={handleSubmit}
          name="LogIn"
          color="#ffffff"
          bgColor={themeClr}
        />
      </form>
      <Footer />
    </div>
  )
}

export default hot(module)(Login)
