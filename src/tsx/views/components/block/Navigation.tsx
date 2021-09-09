import { useState } from 'react'

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// componets
import { Button } from '../../components/atoms/Button'
import { Humburger } from '../../components/modules/Humburger'
import { NavigationList } from './NavigationList'
import { NavigationSP } from './NavigationSP'

// style
import { clrWhite, clrTheme, media_pc } from '../../../style/variables'

export const Navigation = () => {
  // ハンバーガーメニューstate管理
  const [open, setOpen] = useState(false)

  const navContainer = css`
  display: none;
  ${media_pc} {
    display: flex;
  }
`
  const HumburgerWrap = css`
  display: block;
  ${media_pc} {
    display: none;
  }
`

  return (
    <nav>
      <div css={HumburgerWrap}>
        <Humburger open={open} setOpen={setOpen} />
        <NavigationSP open={open} />
      </div>
      <div css={navContainer}>
        <NavigationList />
      </div>
    </nav>
  )
}
