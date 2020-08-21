import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const apiURL = 'https://jsonplaceholder.typicode.com/users'
// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncLogin = createAsyncThunk('login/get', async () => {
  //  ログインAPIを叩く想定
  await axios.get(apiURL)
  //   console.log(res.data)
})

const loginSlice = createSlice({
  //   slice名
  name: 'login',
  //   初期値
  initialState: {
    auth: {
      username: '',
      password: ''
    },
    isLogin: false
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    editUsername: (state, action) => {
      state.auth.username = action.payload

    },
    editPassword: (state, action) => {
      state.auth.password = action.payload
    },
    logout: (state, action) => {
      state.isLogin = false
    }
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.isLogin = true
    })
  }
})

// actionをexport
export const { editUsername, editPassword, logout } = loginSlice.actions
// state情報をexport
export const selectUser = (state: any) => state.login
// reducerをexport → storeへ
export default loginSlice.reducer
