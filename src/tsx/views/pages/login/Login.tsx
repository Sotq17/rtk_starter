/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// store
import { hot } from 'react-hot-loader'

// style
import { clrBack } from '../../../style/variables'
import { LoginForm } from './LoginForm'

const Login = () => {
  const loginFormWrap = css`
  background-color: ${clrBack};
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
`

  const loginFormContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

  return (
    <div css={loginFormWrap}>
      <div css={loginFormContainer}>
        <LoginForm />
      </div>
    </div>
  )
}

export default hot(module)(Login)
