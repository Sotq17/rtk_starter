import { css } from '@emotion/core'
import { media_pc, media_pc_l } from '../variables'

export const LoginTitle = css`
  color: pink;
  ${media_pc} {
    color: blue;
  }
  ${media_pc_l} {
    color: red;
  }
`
