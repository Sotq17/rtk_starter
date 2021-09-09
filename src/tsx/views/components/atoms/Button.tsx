// 以下の要素を流しこめば生成されるボタン（四角）
// color: 文字色
// bgColor: 背景色
// loading: loadingをボタン内に入れたい場合にtrue/falseで入れる
// name: ボタンの文字
// onClick: click時に走る関数

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { SpinnerSmall } from './Spinner'

interface ButtonProps {
  color: string
  bgColor: string
  loading?: boolean
  name: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = (props: ButtonProps) => {
  const button: FIXME = {
    position: 'relative',
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    border: `1px solid ${props.bgColor}`,
    padding: '10px 32px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
  const spinnerWrapper = css`
    position: absolute;
    top: 33%;
    right: 7%;
  `

  return (
    <button css={button} onClick={props.onClick}>
      {props.name}
      {props.loading && (
        <div css={spinnerWrapper}>
          <SpinnerSmall />
        </div>
      )}
    </button>
  )
}
