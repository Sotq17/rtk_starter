import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// componets
import { Button } from '../../components/atoms/Button'
// store
import { selectLogin, logout } from '../../../stores/slices/loginSlice'
// style
import { HeaderContainer } from '../../../style/components/block/Header'
import { clrWhite, clrTheme } from '../../../style/variables'
import { Navigation } from './Navigation'

export const Header = () => {
  const headerLink = css`
    text-decoration: none;
    color: inherit;
  `

    const headerWrap = css`
    height: 50px;
  `

  return (
    <div css={headerWrap}>
      <div css={HeaderContainer}>
        <Link to="/" css={headerLink}>
          <p>Header Logo</p>
        </Link>
        <Navigation />
      </div>
    </div>
  )
}
