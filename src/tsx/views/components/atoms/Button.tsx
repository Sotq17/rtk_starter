import React from 'react'
import { css } from '@emotion/core'

export const Button = props => {
  const button = css({
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    border: `1px solid ${props.bgColor}`,
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  })

  return (
    <button css={button} onClick={props.onClick}>
      {props.name}
    </button>
  )
}
