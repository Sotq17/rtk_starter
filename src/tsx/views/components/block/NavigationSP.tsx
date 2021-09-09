/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { NavigationList } from './NavigationList'
import { clrTheme } from '../../../style/variables'

interface navigationProps {
  open: boolean
}
export const NavigationSP = ({ open }: navigationProps) => {
  let menuWidth = ``
  if (open) {
    menuWidth = `
      width: 250px;
    `
  } else {
    menuWidth = `
      width: 0px;
    `
  }

  const menuContainer = css`
  background-color: ${clrTheme};
  color: white;
  min-height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  transition: all 0.3s;
`

  return (
    <div css={[menuContainer, menuWidth]}>{open && <NavigationList />}</div>
  )
}
