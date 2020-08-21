import * as React from 'react'
import { Global, css } from '@emotion/core'

// グローバルCSS
const globalStyle = css`
  body {
    color: blue;
  }
`

const GlobalStyle: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {children}
    </div>
  )
}

export default GlobalStyle
