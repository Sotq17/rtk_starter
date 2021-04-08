
import { clrBlue, clrWhite, clrDarkGray } from '../../../style/variables'

type LabelProps = {
  type: number
}

export const RequiredLabel = ({ type }: LabelProps) => {
  const titleLabel = `

  font-size:12px;
  padding 5px;
  border-radius:2px;
  `
  let labelType
  if (type === 1) {
    labelType = `
      background-color:${clrBlue};
      color:${clrWhite};
    `
  } else if (type === 2) {
    labelType = `
      background-color:${clrWhite};
      color:${clrDarkGray};
      border: 1px solid ${clrDarkGray};
      // font-weight:bold;
    `
  }

  return (
    <label css={[titleLabel, labelType]}>
      {type === 1 && '必須'}
      {type === 2 && '任意'}
    </label>
  )
}
