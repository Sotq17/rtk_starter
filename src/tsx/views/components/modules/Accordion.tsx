// 親要素内に収まるアコーディオン
// ex)SP時のナビゲーション（ハンバーガーメニュー内）

import { useState, useRef } from 'react'
import { media_pc } from '../../../style/variables'

export const Accordion = (props: any) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content: any = useRef(null)
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(setActive === 'active' ? '0px' : `800px`)
  }

  const accordionContent = setActive
    ? `
        overflow: auto;
        transition: max-height 0.3s ease;
        max-height: ${setHeight};
      `
    : `
        overflow: auto;
        transition: max-height 0.3s ease;
        max-height: ${setHeight};
      `

  const rotate = setActive
    ? ``
    : `
        margin-bottom: 5px;
        transform: rotate(135deg);
      `

  const accordion = `
  color: #dddddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  ${media_pc} {
    padding: 0 20px;
  }
`

  const accordion__arrow = `
  width: 7px;
  height: 7px;
  border: 2px solid;
  border-left: transparent;
  border-bottom: transparent;
  transform: rotate(-45deg);
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-left: 10px;
  position: absolute;
  right: 0px;
`

  return (
    <div css={accordion__section} onClick={toggleAccordion}>
      <div css={[accordion]}>
        <p>{props.text}</p>

        <label css={[accordion__arrow, rotate]} />
      </div>
      <div ref={content} css={accordionContent}>
        {props.children}
      </div>
    </div>
  )
}

const accordion__section = `
  display: flex;
  flex-direction: column;
  width: 100%;
`
