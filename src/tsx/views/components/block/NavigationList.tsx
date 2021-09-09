/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { Fragment } from 'react'

import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// componets
import { Button } from '../../components/atoms/Button'
import { Accordion } from '../../components/modules/Accordion'
import { AccordionAbsolute } from '../../components/modules/AccordionAbsolute'
// store
import { logout } from '../../../stores/slices/loginSlice'
//  style
import { clrWhite, clrTheme, only_sp, only_pc } from '../../../style/variables'
import {
  navList,
  navItem,
  navItemAccordion,
  navItemLink,
  logoutBtnWrap
} from '../../../style/components/block/Navigation'

export const NavigationList = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch(logout(''))
    history.push('/login')
  }
  return (
    <Fragment>
      <div css={navList}>
        <div css={navItem}>
          <Link to="/entry" css={navItemLink}>
            新規追加
          </Link>
        </div>

        <div css={navItem}>
          <Link to="/" css={navItemLink}>
            一覧
          </Link>
        </div>

        <div css={navItem}>
          <Link to="/C" css={navItemLink}>
            C
          </Link>
        </div>

        <div css={[navItem, only_sp]}>
          <div css={navItemAccordion}>
            <Accordion text="D">aaaaa</Accordion>
          </div>
        </div>
        <div css={[navItem, only_pc]}>
          <div css={navItemAccordion}>
            <AccordionAbsolute text="D">aaaaa</AccordionAbsolute>
          </div>
        </div>
      </div>
      <div css={logoutBtnWrap}>
        <Button
          onClick={handleLogout}
          name="Logout"
          color={clrTheme}
          bgColor={clrWhite}
        />
      </div>
    </Fragment>
  )
}
