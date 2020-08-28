import { css } from '@emotion/core'
import { themeClr } from '../../../style/variables'

// どっちの書き方でもOK！
export const HeaderContainer = css({
  width: '100%',
  height: '50px',
  backgroundColor: themeClr,
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff'
})

// export const HeaderContainer = css`
//   width: 100%;
//   height: 50px;
//   background-color: #82b0a2;
//   display: flex;
//   align-items: center;
//   color: #ffffff;
// `
