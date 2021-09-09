
import { clrBlue, clrWhite, clrDarkGray } from '../../../style/variables'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

type LabelProps = {
  type: number
}

export const RequiredLabel = ({ type }: LabelProps) => {
  const titleLabel = css`
  font-size:12px;
  padding: 5px;
  border-radius:2px;
  `
  let labelType
  if (type === 1) {
    labelType = css`
      background-color:${clrBlue};
      color:${clrWhite};
    `
  } else if (type === 2) {
    labelType = css`
      background-color:${clrWhite};
      color:${clrDarkGray};
      border: 1px solid ${clrDarkGray};
    `
  }

  return (
    <label css={[titleLabel, labelType]}>
      {type === 1 && '必須'}
      {type === 2 && '任意'}
    </label>
  )
}
