
import { useSelector } from 'react-redux'
import { selectLogin } from '../../../stores/slices/loginSlice'
import { hot } from 'react-hot-loader'
import { useModal } from '../../components/modules/modal/useModal'

// parts
import TopList from './TopList'
import { Header } from '../../components/block/Header'
// style
import { TopTitle } from '../../../style/pages/Top'
import { FixedModal } from '../../components/modules/modal/FixedModal'

const Top = () => {
  const user = useSelector(selectLogin)

  // modal表示用
  const { isShowing, toggle } = useModal()
  const firstModalFunc = () => {
    toggle()
    console.log('firstmodalfunc')
  }
  const secondModalFunc = () => {
    toggle()
    console.log('secondmodalfunc')
  }
  return (
    <div>
      <Header />
      <h1 css={TopTitle}>TOP</h1>
      {user.username ? (
        <div>
          <p>welcome</p>

          <p>{user.username}</p>
        </div>
      ) : null}

      <TopList />

      {/* 画面全体を覆うModal */}
      <button onClick={() => toggle()}>modalを表示する</button>
      {isShowing && (
        <FixedModal
          // modal上部のメッセージ
          modalMsg={'modal message'}
          // ボタンのテキスト１
          text={'閉じる（first）'}
          // ボタンのテキスト２
          secondText={'閉じる（second）'}
          // ボタンの機能１
          func={firstModalFunc}
          // ボタンの機能２
          secondFunc={secondModalFunc}
        />
      )}

      {/* 画面全体を覆うLoading */}
      {/* <FixedSpinner /> */}
    </div>
  )
}

export default hot(module)(Top)
