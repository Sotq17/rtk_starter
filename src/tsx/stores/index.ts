import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice'
import formInfoReducer from './slices/formInfoSlice'
// それぞれのSliceを呼び出して結合する
export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    login: loginReducer,
    formInfo: formInfoReducer,
  }
})
