import * as React from 'react'
import { Global, css } from '@emotion/core'
import { textClr } from '../style/variables'

// グローバルCSS
const globalStyle = css`
  body {
    color: ${textClr};
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
