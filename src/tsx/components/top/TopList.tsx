// 同ページ内の要素は同じディレクトリで作成
import { hot } from 'react-hot-loader'
import React from 'react'

const TopList = () => {
  return (
    <div>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </div>
  )
}

export default hot(module)(TopList)
