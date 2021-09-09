/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { media_pc, clrDarkGray, clrLightGray, clrError } from '../variables'

export const formItemWrap = css`
    margin-top:40px;
    margin-bottom:40px;
  `
export const formItemContainer = css`
  ${media_pc}{
    display: flex;
    align-items: baseline;
  }
  `
export const formItemTitleContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    ${media_pc}{
      width:40%;
      margin-bottom: 0px;
    }
  `
export const formItemTitle = css`
    font-weight:bold;
  `
export const formItemContentContainer = css`
    display:flex;
    flex-direction:column;
    ${media_pc}{
      width:60%;
    }
  `

export const formItemContentWrap = css`
  display:flex;
  flex-direction:column;
  width:60%;
`
export const formItemContentContainerRows = css`
    display:flex;
    justify-content:space-between;
    ${media_pc}{
      width:100%;
    }
`
export const formItemContent = css`
    font-size:16px;
    margin-bottom: 5px;
    width: calc(100% - 26px);
    padding: 12px;
    border:1px solid ${clrDarkGray};
    border-radius:6px;
    background-color:${clrLightGray};


  `
  export const formItemContentDate= css`
    width: 100%;
    position:relative;
    .react-datepicker-wrapper{
      width:100%
    }
    input {
      font-size:16px;
      margin-bottom: 5px;
      width: calc(100% - 26px);
      border:1px solid ${clrDarkGray};
      border-radius:6px;
      background-color:${clrLightGray};
      padding: 12px;
    }
  `

export const formItemContentSmall = css`
  font-size:16px;
  margin-bottom: 5px;
  width: calc(48% - 26px);
  padding: 12px;
  border:1px solid ${clrDarkGray};
  border-radius:6px;
  background-color:${clrLightGray};
`


export const formItemSelect = css`
    font-size:16px;
    margin-bottom: 5px;
    width: 100%;
    padding:18px 12px;
    border:1px solid ${clrDarkGray};
    border-radius:6px;
    background-color:${clrLightGray};
    cursor:pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    &:after {
      content: "";
    }
    &:-ms-expand {
      display: none;
    }
  `

export const formItemError = css`
    margin-top: 5px;
    color:${clrError}
  `

export const formLabelWrap = css`
  margin-right: 10px;
  `

export const formSelectWrap = css`
  position:relative;
    &:after{
    pointer-events: none;
    content:"";
    display:block;
    width:5px;
    height:5px;
    position:absolute;
    right:24px;
    top:40%;
    border-bottom:#333 2px solid;
    border-right:#333 2px solid;
    transform:rotate(45deg)translateY(-30%);
  }
  `
