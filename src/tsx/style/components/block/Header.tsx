/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { clrTheme, clrWhite } from '../../../style/variables'

export const HeaderContainer = css`
  width: 100%;
  height: 50px;
  background-color: ${clrTheme};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${clrWhite};
  position: fixed;
`
