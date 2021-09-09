/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

// components
import { FixedSpinner } from '../../components/block/FixedSpinner'
import { ButtonRound } from '../../components/atoms/ButtonRound'

// style
import {
  clrWhite,
  clrTheme,
  media_pc,
  only_sp,
  media_sp
} from '../../../style/variables'

import {
  title,
  listContainer,
  tableContainer,
  tableItem,
  tableItemContent,
  tableList,
  tableListTop,
  tableItemTitle,
  tableSelect
} from '../../../style/components/block/Table'

interface TableProps {
  titleList: string[]
  titleText?: string
  list: any
}

export const Table = ({ titleList, titleText, list }: TableProps) => {
  const handleChange = () => {}
  const handleClick = () => {}
  return (
    <div>
      <h2 css={title}>{titleText && titleText}</h2>
      <div css={listContainer}>
        <table css={[tableContainer]}>
          <tbody>
            <tr css={[tableList, tableListTop]}>
              {titleList.map((title: string, index: number) => {
                return (
                  <td css={tableItem} key={index}>
                    {title}
                  </td>
                )
              })}
            </tr>
          </tbody>
          {list.length &&
            list.map((item: any, index: number) => {
              const user = item
              return (
                <tbody key={index}>
                  <tr css={tableList}>
                    <th css={tableItem}>
                      <p css={[only_sp, tableItemTitle]}>{titleList[0]}</p>
                      <p css={tableItemContent}>{item.id}</p>
                    </th>
                    <th css={tableItem}>
                      <p css={[only_sp, tableItemTitle]}>{titleList[1]}</p>
                      <p css={tableItemContent}>-</p>
                    </th>
                    <th css={tableItem}>
                      <p css={[only_sp, tableItemTitle]}>{titleList[2]}</p>
                      <p css={tableItemContent}>-</p>
                    </th>
                    <th css={tableItem}>
                      <p css={[only_sp, tableItemTitle]}>{titleList[3]}</p>
                      <div css={tableItemContent}>
                        <ButtonRound
                          onClick={handleClick}
                          name="詳細"
                          color={clrWhite}
                          bgColor={clrTheme}
                        />
                      </div>
                    </th>
                    <th css={tableItem}>
                      <p css={[only_sp, tableItemTitle]}>{titleList[4]}</p>
                      <div css={tableItemContent}>
                        <select
                          name=""
                          id={user.id}
                          // value={user.access_auth}
                          onChange={handleChange}
                          css={tableSelect}
                        >
                          <option value={1}>有効</option>
                          <option value={2}>無効</option>
                        </select>
                      </div>
                    </th>
                  </tr>
                </tbody>
              )
            })}
        </table>
      </div>
    </div>
  )
}
