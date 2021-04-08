
import { useDispatch, useSelector } from 'react-redux'
import { selectLogin, logout } from '../../../stores/slices/loginSlice'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// components
import { Header } from '../../components/block/Header'
import { Button } from '../../components/atoms/Button'
import { FormMain } from './form/FormMain'
// style
import { TopTitle } from '../../../style/pages/Top'

const Entry = () => {
  const user = useSelector(selectLogin)

  return (
    <div>
      <Header />
      <h1 css={TopTitle}>Entry</h1>
      <FormMain />
    </div>
  )
}

export default hot(module)(Entry)
