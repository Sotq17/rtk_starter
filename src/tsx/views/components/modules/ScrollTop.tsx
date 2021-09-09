// 押したら上にスクロールする機能付きのコンポーネント
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { animateScroll as scroll } from 'react-scroll'

const ButtonContainer = {
  position: 'fixed',
  right: '50px',
  bottom: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '#062854',
  cursor: 'pointer'
} as const

const ButtonContent = {
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '24px'
} as const

export default function ScrollTop() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div css={ButtonContainer} onClick={scrollToTop}>
      <p css={ButtonContent}>↑</p>
    </div>
  )
}


