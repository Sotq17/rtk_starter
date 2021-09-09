// ハンバーガーメニューのアイコン
// useStateと、出てくる要素と一緒に使用する
// ex)Navigation.tsx
// 出てくる要素 → NavigationSP
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { hamburger } from '../../../style/components/modules/Humburger'
import { Navigation } from '../block/Navigation'

type Props = {
  open: boolean
  setOpen: Function
}

export const Humburger: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div css={hamburger}>
      <button
        type="button"
        className="button hamburger"
        aria-controls="global-nav"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburgerLine">
          <span className="visuallyHidden">メニューを開閉する</span>
        </span>
      </button>
    </div>
  )
}
