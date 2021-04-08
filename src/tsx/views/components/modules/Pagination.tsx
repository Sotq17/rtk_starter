// 以下の要素を流し込むことで、Paginationのコンポーネントを生成する
// ex)Top.tsx
// numberPerPage: 表示させる要素数
// totalNumber:保持している要素の数
// paginate: pagination関数
// currentPage: 現在のページ番号
// type: ページネーションのタイプ


import { PaginationContent } from './PaginationContent'
import { Arrow } from '../atoms/Arrow'

export const Pagination = ({
  numberPerPage,
  totalNumber,
  paginate,
  currentPage,
  type
}: any) => {
  const pageNumber: number[] = []
  for (let i: number = 1; i <= Math.ceil(totalNumber / numberPerPage); i++) {
    pageNumber.push(i)
  }
  const lastPageNumber = pageNumber[pageNumber.length - 1]

  const paginationList = `
  display: flex;
`
  const paginationItem = `
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

  return (
    <nav>
      <ul css={paginationList}>
        <li>
          <button
            css={paginationItem}
            onClick={() => paginate(currentPage - 1)}
          >
            <Arrow direction={'left'} />
          </button>
        </li>

        <PaginationContent
          pageNumber={pageNumber}
          lastPageNumber={lastPageNumber}
          paginate={paginate}
          currentPage={currentPage}
          type={type}
        />

        <li>
          <button
            css={paginationItem}
            onClick={() => paginate(currentPage + 1)}
          >
            <Arrow direction={'right'} />
          </button>
        </li>
      </ul>
    </nav>
  )
}
