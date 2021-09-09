import { Fragment } from 'react'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// pagenationの形を変更
export const PaginationContent = ({
  pageNumber,
  lastPageNumber,
  paginate,
  currentPage,
  type
}: any) => {
  // firstNum ... を表示させるか
  let prevFlag = false
  // ... lastNum を表示させるか
  let nextFlag = false

  if (currentPage < 4) {
    prevFlag = false
  } else {
    prevFlag = true
  }
  if (currentPage > lastPageNumber - 2) {
    nextFlag = false
  } else {
    nextFlag = true
  }

  const paginationList = css`
  display: flex;
`
  const paginationItem = css`
  outline: none;
  border: none;
  background: #ffffff;
  cursor: pointer;
  height: 34px;
  width: 34px;
  background-color: #fafafa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  color: #53565f;
`

  const noCursor = css`
  cursor: auto;
`
  const currentPageItem = css`
  background: #53565f;
  color: #ffffff;
`

  // 全表示
  if (type === 1) {
    return pageNumber.map((num: number) => {
      return (
        <li key={num}>
          <button css={paginationItem} onClick={() => paginate(num)}>
            {num}
          </button>
        </li>
      )
    })
    // 現在のページのみ
  } else if (type === 2) {
    return (
      <li key={currentPage}>
        <button css={paginationItem} onClick={() => paginate(currentPage)}>
          {currentPage}
        </button>
      </li>
    )
    // 現在ページを起点に+-2まで表示
  } else if (type === 3) {
    return (
      <div css={paginationList}>
        {prevFlag && (
          <Fragment>
            <li key={1}>
              <button onClick={() => paginate(1)} css={paginationItem}>
                {1}
              </button>
            </li>
            <li css={[paginationItem, noCursor]}>
              <p>…</p>
            </li>
          </Fragment>
        )}
        {pageNumber.map((num: number) => {
          // console.log(num)
          // console.log(currentPage)
          if (num < currentPage - 2 || num > currentPage + 1) {
            return
          }
          return (
            <li key={num}>
              {num === currentPage ? (
                <button
                  onClick={() => paginate(num)}
                  css={[paginationItem, currentPageItem]}
                >
                  {num}
                </button>
              ) : (
                <button onClick={() => paginate(num)} css={paginationItem}>
                  {num}
                </button>
              )}
            </li>
          )
        })}
        {nextFlag && (
          <Fragment>
            <li css={[paginationItem, noCursor]}>
              <p>…</p>
            </li>
            <li key={lastPageNumber}>
              <button
                onClick={() => paginate(lastPageNumber)}
                css={paginationItem}
              >
                {lastPageNumber}
              </button>
            </li>
          </Fragment>
        )}
      </div>
    )
  } else {
    null
  }
}
