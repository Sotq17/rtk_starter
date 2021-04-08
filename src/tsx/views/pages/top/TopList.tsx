// 同ページ内のユニークな要素は同じディレクトリで作成

import { useState, Fragment } from 'react'
import { hot } from 'react-hot-loader'

import { Table } from '../../components/block/Table'
import { Pagination } from '../../components/modules/Pagination'
import { animateScroll as scroll } from 'react-scroll'

const TopList = () => {
  // tableの一番上のtitle
  const titleList = ['titleA', 'titleB', 'titleC', 'titleD', 'titleE']
  // 表示する内容
  const userList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ]

  // ページネーション
  // 現在のページ
  const [currentPage, setCurrentPage] = useState(1)
  // 各ページの最大表示数
  const [numberPerPage, setNumberPerPage] = useState(3)
  // paginationで使用する変数
  const indexOfLastPost = currentPage * numberPerPage
  const indexOfFirstPost = indexOfLastPost - numberPerPage
  const currentList =
    userList.length > 0 && userList.slice(indexOfFirstPost, indexOfLastPost)
  const indexOfLastPage = Math.ceil(userList.length / numberPerPage)

  // pageを変更する
  const paginate = (num: number) => {
    // page数以下/以上になる場合return
    if (num === 0) {
      return
    } else if (num > indexOfLastPage) {
      return
    }
    setCurrentPage(num)
    // SP用スクロール
    scroll.scrollToTop()
  }

  // style

  const TopListContainer = {
    height: '100vh'
  }

  return (
    <Fragment>
      <Table
        // テーブルにタイトルがつく場合は文字列で渡す
        titleText={'topList'}
        // テーブルのタイトルを配列で渡す
        titleList={titleList}
        // テーブルの内容を配列で渡す
        list={currentList}
      />
      <Pagination
        numberPerPage={numberPerPage}
        totalNumber={userList.length}
        paginate={paginate}
        currentPage={currentPage}
        // 1  全表示
        // 2  現在ページのみ
        // 3  現在ページを起点に+-2まで表示
        type={3}
      />
    </Fragment>
  )
}

export default hot(module)(TopList)
