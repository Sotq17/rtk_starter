// 以下の情報を流し込むことで、生成されるInput
// ex) FormMain.tsx

// title：インプットの説明のための文字
// register：reactHookFormの関数
// type：Inputのタイプ
// placeholder：placeholder
// name：各inputのname。Submit時にこのnameで値を取得できる。（ex. data.LastNameなど）
// validate：バリデーションの内容。何もなければ{}を入れる。必須/任意タグもこの要素で出し分けている
// errors：hookformのerrorsオブジェクト

import { RequiredLabel } from '../../../components/atoms/RequiredLabel'
import {
  formItemWrap,
  formItemContainer,
  formItemTitleContainer,
  formLabelWrap,
  formItemTitle,
  formItemContentContainer,
  formItemContent,
  formItemError
} from '../../../../style/pages/Form'
import { useState } from 'react'



type FormInputProps = {
  register: FIXME
  type: string
  placeholder: string
  name: string
  validate: FIXME
  title: string
  errors: FIXME
}

export const FormInput = (props: FormInputProps) => {
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

  let idValue
  if (name === "City") {
    idValue = "cityInput"
  } else if (name === "Address") {
    idValue = "addressInput"
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
        <div css={formItemContentContainer}>
          <input
            id={idValue}
            type={type}
            placeholder={placeholder}
            name={name}
            ref={register(validate)}
            css={formItemContent}
          />
          <p css={formItemError}>{errorMsg}</p>
        </div>
      </div>
    </div>
  )
}
