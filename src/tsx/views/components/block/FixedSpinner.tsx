// 画面に固定されるSpinner
// API通信時など、ユーザーの操作を止めたい場合に使用する

import { Spinner } from '../atoms/Spinner'
import { createPortal } from 'react-dom'

export const FixedSpinner = () => {
  const app = document.getElementById('app')
  if (!app) {
    return <div />
  }
  const spinnerOverRay = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(245, 245, 245, 0.5);
`
  const spinnerWrap = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

  return createPortal(
    <div css={spinnerOverRay}>
      <div css={spinnerWrap}>
        <Spinner />
      </div>
    </div>,
    app
  )
}
