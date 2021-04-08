// モーダルのカスタムフック
// FixedModalと一緒に使用する
// ex) pages/top/Top.tsx

import { useState } from 'react'

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const [modalMsg, setModalMsg] = useState('')

  const toggle = () => {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
    modalMsg,
    setModalMsg
  }
}
