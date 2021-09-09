// 以下の情報を流し込むことで、生成されるSelect要素
// ex) FormMain.tsx

// title：インプットの説明のための文字
// register：reactHookFormの関数
// placeholder：placeholder
// name：各inputのname。Submit時にこのnameで値を取得できる。（ex. data.LastNameなど）
// validate：バリデーションの内容。何もなければ{}を入れる。必須/任意タグもこの要素で出し分けている
// errors：hookformのerrorsオブジェクト
// * option要素は子要素としてラップする
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

import { RequiredLabel } from '../../../components/atoms/RequiredLabel'
import {
  formItemWrap,
  formItemContainer,
  formItemTitleContainer,
  formLabelWrap,
  formItemTitle,
  formItemContentContainer,
  formItemError,
  formSelectWrap,
  formItemSelect
} from '../../../../style/pages/Form'



type FormInputProps = {
  register: FIXME
  placeholder: string
  name: string
  validate: FIXME
  title: string
  errors: FIXME
}

export const FormSelect = (props: any) => {
  const title = props.title
  const name = props.name
  const validate = props.validate
  const register = props.register
  const errors = props.errors
  const errorMsg = errors[name]
    ? errors[name].message
      ? errors[name].message
      : 'エラーが発生しました'
    : ''

  const options = props.children

  let idValue
  if (name === "Pref") {
    idValue = "prefSelect"
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
          <div css={formSelectWrap}>
            <select name={name} ref={register(validate)} css={formItemSelect} id={idValue}>
              {options.length &&
                options.map((option: HTMLAllCollection) => {
                  return option
                })}
            </select>
          </div>

          <p css={formItemError}>{errorMsg}</p>
        </div>
      </div>
    </div>
  )
}
