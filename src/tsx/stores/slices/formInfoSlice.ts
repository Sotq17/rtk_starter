// form入力して、storeに保存する

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import fetchJsonp from 'fetch-jsonp'

type ZipProps = {
  zipVal: string
}

export const fetchAddressFromZip = createAsyncThunk(
  'zipcode/search',
  async ({ zipVal }: ZipProps) => {
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipVal}`
    console.log(url)
    const response = await fetchJsonp(url)
    const result = await response.json()

    result.name = name
    return result
  }
)

const formInfoSlice = createSlice({
  //   slice名
  name: 'formInfo',
  //   初期値

  initialState: {
    info: {
      Pref: '',
      City: '',
      Address: '',
      Building: '',
    },
    isLoading: false,
  },
  // 各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    editEntryInfo: (state, action) => {
      state.info = action.payload
    },
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAddressFromZip.rejected, (state, action) => {
      console.log(action)
    })
    builder.addCase(fetchAddressFromZip.fulfilled, (state, action) => {
      console.log(action)
      if (!action.payload.results) {
        return
      }
      const name = action.payload.name
      const result = action.payload.results[0]
      const prefCode = result.prefcode
      const city = result.address2
      const address = result.address3
      state.info.Pref = prefCode
      state.info.City = city
      state.info.Address = address
    })
  },
})

// actionをexport
export const { editEntryInfo } = formInfoSlice.actions
// state情報をexport
export const selectEntryInfo = (state: FIXME) => state.formInfo.info
export const selectCity = (state: FIXME) => state.formInfo.info.City
// reducerをexport → storeへ
export default formInfoSlice.reducer
