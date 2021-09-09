
// 以下の情報を流し込むことで、生成されるSelect要素
// ex) FormMain.tsx

// title：インプットの説明のための文字
// register：reactHookFormの関数
// type：Inputのtype
// placeholder：placeholder
// name：各inputのname。Submit時にこのnameで値を取得できる。（ex. data.LastNameなど）
// validate：バリデーションの内容。何もなければ{}を入れる。必須/任意タグもこの要素で出し分けている
// errors：hookformのerrorsオブジェクト

// 住所検索でAPIが走り、結果をStoreに保持する
// ex) FormMain.tsx

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { RequiredLabel } from '../../../components/atoms/RequiredLabel'
import {
  formItemWrap,
  formItemContainer,
  formItemTitleContainer,
  formLabelWrap,
  formItemTitle,
  formItemContentWrap,
  formItemContentSmall,
  formItemError,
  formItemContentContainerRows
} from '../../../../style/pages/Form'
import { clrDarkGray, clrLightGray, clrWhite, media_pc } from '../../../../style/variables'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddressFromZip } from '../../../../stores/slices/formInfoSlice'



type FormInputProps = {
  register: FIXME
  type: string
  placeholder: string
  name: string
  validate: FIXME
  title: string
  errors: FIXME
}

export const FormZipCode = (props: FormInputProps) => {
  const title = props.title
  const type = props.type
  const placeholder = props.placeholder
  const name = props.name
  const validate = props.validate
  const register = props.register
  const errors = props.errors
  const errorMsg = errors[name]
    ? errors[name].message
      ? errors[name].message
      : 'エラーが発生しました'
    : ''

  const formInputZipSearch = css`
  font-size: 16px;
  height: 100%;
  width: 48%;
  padding: 12px;
  border: 1px solid ${clrDarkGray};
  border-radius: 6px;
  background-color: ${clrDarkGray};
  color: ${clrWhite};
  cursor: pointer;
`

  const dispatch = useDispatch()

  const handleClick = (e: FIXME) => {
    e.preventDefault()
    const target:any = document.getElementById("zipInput")
    if (target) {
      dispatch(fetchAddressFromZip({ zipVal:target.value }))

    }

  }
  return (
    <div css={formItemWrap}>
      <div css={formItemContainer}>
        <div css={formItemTitleContainer}>
          <div css={formLabelWrap}>
            <RequiredLabel type={validate.required ? 1 : 2} />
          </div>
          <p css={formItemTitle}>{title}</p>
        </div>
        <div css={formItemContentWrap}>
        <div css={formItemContentContainerRows}>
          <input
            id="zipInput"
            type={type}
            placeholder={placeholder}
            name={name}
            ref={register(validate)}
            css={formItemContentSmall}
          />
          <button onClick={handleClick} css={formInputZipSearch}>
            住所表示
          </button>
          </div>
          <p css={formItemError}>{errorMsg}</p>
        </div>
      </div>
    </div>
  )
}
