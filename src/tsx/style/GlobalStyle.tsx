import * as React from 'react'
import { Global, css, jsx } from '@emotion/react'
import { reset } from './resetStyle'

// 追加グローバルスタイルは以下に記載
const globalStyle = `
  ${reset}
  body {
    font-family: sans-serif;
  }
  button {
    outline: none;
    font-family: sans-serif;
  }
  input{
    font-family: sans-serif;
  }
  select{
        font-family: sans-serif;
        -webkit-appearance: button;
        appearance: button;
  }

`

const GlobalStyle: React.FC = () => {
  return (
    <div>
      <Global styles={globalStyle} />
    </div>
  )
}

export default GlobalStyle
