
// 画面全体に固定されるモーダル
// useModalと一緒に使用する
// ex) pages/top/Top.tsx

import {
  media_pc,
  media_pc_l,
  clrWhite,
  clrTheme
} from '../../../../style/variables'
import { Spinner } from '../../atoms/Spinner'
import { createPortal } from 'react-dom'
import { ButtonRound } from '../../atoms/ButtonRound'

export const FixedModal = ({
  func,
  secondFunc,
  modalMsg,
  text,
  secondText
}: FIXME) => {
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
  // ${media_pc} {
  //   width: calc(100vw - 250px);
  // }
`
  const spinnerWrap = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
  const errorModal = `
  width: 300px;
  padding: 30px;
  // min-height:300px;
  background-color:${clrWhite};
  border: 3px solid ${clrTheme};
  border-radius:6px;
  `
  const errorModalTxtContainer = `
  display:flex;
  justify-content:center;
  margin-bottom: 50px
  `
  const errorModalTxt = `
    width: 100%;
    line-height: 1.8;
    word-wrap: break-word;
    white-space: pre-wrap;
  `
  const errorModalButtons = `
  display: flex;
  justify-content:space-between;
  `

  const errorModalButtonWrap = `

  width: 47%

  `

  return createPortal(
    <div css={spinnerOverRay}>
      <div css={spinnerWrap}>
        <div css={errorModal}>
          <div css={errorModalTxtContainer}>
            <p css={errorModalTxt}>
              {modalMsg
                ? modalMsg
                : 'エラーが発生しました。入力内容を再度ご確認ください。'}
            </p>
          </div>
          <div css={errorModalButtons}>
            <div css={errorModalButtonWrap}>
              <ButtonRound
                color={clrWhite}
                bgColor={'#FDA5A7'}
                name={text}
                onClick={func}
              />
            </div>

            <div css={errorModalButtonWrap}>
              <ButtonRound
                color={clrWhite}
                bgColor={clrTheme}
                name={secondText}
                onClick={secondFunc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    app
  )
}
