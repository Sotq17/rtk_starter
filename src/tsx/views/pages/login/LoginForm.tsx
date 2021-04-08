import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

// sliceから使用するaction
import {
  editUsername,
  fetchAsyncLogin,
  selectLoading
} from '../../../stores/slices/loginSlice'

// components
import { InputBlockColumn } from '../../components//block/InputBlockColumn'
import { Button } from '../../components/atoms/Button'

// style
import { clrTheme, clrWhite } from '../../../style/variables'

interface loginProps {
  username: string
  password: string
}

export const LoginForm = () => {
  const methods: FIXME = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector(selectLoading)

  const onSubmit = async (data: loginProps) => {
    dispatch(editUsername(data.username))
    const username = data.username
    const password = data.password

    const result:FIXME = await dispatch(fetchAsyncLogin({ username, password }))
    // resultの値で判断する
    if (result) {
      history.push('/')
    }

    console.log(data)
  }

  // style

  const formTitleWrap = `
    margin-bottom: 20px;
  `

  const formTitle =  ``

  const loginForm = `
    background-color: ${clrWhite};
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 2px 6px #0000000a;
    border: 1px solid #dddddd;
    border-radius: 10px;
    opacity: 1;
  `

  const inputWrap = `
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  `


  return (
    <FormProvider {...methods}>
      <form css={loginForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <div css={formTitleWrap}>
          <p css={formTitle}>title</p>
        </div>

        <div css={inputWrap}>
          <InputBlockColumn
            name="username"
            text="ユーザー名"
            type="text"
            placeholder="user"
          />
        </div>

        <div css={inputWrap}>
          <InputBlockColumn
            name="password"
            text="パスワード"
            type="password"
            placeholder="password"
          />
        </div>

        <Button
          onClick={methods.handleSubmit(onSubmit)}
          name="LogIn"
          color={clrWhite}
          bgColor={clrTheme}
          loading={loading}
        />
      </form>
    </FormProvider>
  )
}
