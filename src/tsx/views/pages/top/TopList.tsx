// 同ページ内のユニークな要素は同じディレクトリで作成
import React from 'react'
import { css } from '@emotion/core'
import { hot } from 'react-hot-loader'

const TopList = () => {
  return (
    <div css={TopListContainer}>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </div>
  )
}

export default hot(module)(TopList)

const TopListContainer = css({
  height: '100vh'
})
