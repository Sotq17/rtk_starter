import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiURL } from '../../utils/constants'

interface LoginProps {
  username: string
  password: string
}

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncLogin = createAsyncThunk(
  'login/post',
  async ({ username, password }: LoginProps) => {
    //  ログインAPIを叩く想定
    const url = `${apiURL}/login`
    const params = {
      username: username,
      password: password
    }
    const result = await axios(url, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`
      },
      params: params
    })
    return result.data
  }
)

const loginSlice = createSlice({
  //   slice名
  name: 'login',
  //   初期値
  initialState: {
    username: '',
    isLogin: false,
    isLoading: false
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    editUsername: (state, action) => {
      state.username = action.payload
    },
    logout: (state, action) => {
      state.isLogin = false
    }
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAsyncLogin.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLogin = true
    })
  }
})

// actionをexport
export const { editUsername, logout } = loginSlice.actions
// state情報をexport
export const selectLogin = (state: any) => state.login
export const selectLoading = (state: any) => state.login.isLoading
// reducerをexport → storeへ
export default loginSlice.reducer
