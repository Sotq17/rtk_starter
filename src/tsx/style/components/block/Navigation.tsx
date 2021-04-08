//  style
import { clrWhite, media_pc } from '../../../style/variables'

export const navList = `
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media_pc} {
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
  }
`

export const navItem = `
  border-bottom: 1px solid ${clrWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-of-type {
    border-bottom: none;
  }
  ${media_pc} {
    border-right: 1px solid ${clrWhite};
    border-bottom: none;
    &:last-of-type {
      border-right: none;
    }
  }
`

export const navItemLink = `
  text-decoration: none;
  color: inherit;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  ${media_pc} {
    padding: 0 20px;
  }
`

export const navItemAccordion = `
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid ${clrWhite};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-of-type {
    border-bottom: none;
  }
  ${media_pc} {
    // border-left: 1px solid ${clrWhite};
    border-bottom: none;
  }
`

export const logoutBtnWrap = `
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  ${media_pc} {
    padding-bottom: 0px;
  }
`
