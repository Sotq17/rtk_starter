// style
import { clrWhite, media_sp, media_pc } from '../../../style/variables'

export const listContainer = `
  background: #ffffff;
`

export const title = `
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`
export const tableContainer = `
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  ${media_pc} {
    border: solid 0.5px #dddddd;
  }
`
export const tableItem = `
  height: 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${media_pc} {
    width: 20%;
    border: solid 0.5px #dddddd;
    justify-content: center;
  }
`

export const tableItemTitle = `
  ${media_sp} {
    display: flex;
    align-items: center;
    width: 30%;
    height: calc(100% - 2px);
    border: solid 0.5px #dddddd;
  }
`
export const tableItemContent = `
  ${media_sp} {
    display: flex;
    align-items: center;
    width: 70%;
    height: calc(100% - 2px);
    border: solid 0.5px #dddddd;
  }
`

export const tableList = `
  display: flex;
  flex-direction: column;
  border: solid 0.5px #dddddd;
  margin-bottom: 20px;
  ${media_pc} {
    flex-direction: row;
    justify-content: space-between;
    border: none;
    margin-bottom: 0px;
  }
`

export const tableListTop = `
  background-color: #fafafa;
  font-weight: bold;
  display: none;
  ${media_pc} {
    display: flex;
  }
`

export const tableSelect = `
  height: 100%;
  // width: 100%;
  border: none;
  cursor: pointer;
`
