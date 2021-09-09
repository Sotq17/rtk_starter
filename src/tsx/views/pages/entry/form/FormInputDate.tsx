
// 以下の情報を流し込むことで、生成されるカレンダー月のInput要素。Dateオブジェクトで取れる
// ex) FormMain.tsx

// title：インプットの説明のための文字
// placeholder：placeholder
// name：各inputのname。Submit時にこのnameで値を取得できる。（ex. data.LastNameなど）
// validate：バリデーションの内容。何もなければ{}を入れる。必須/任意タグもこの要素で出し分けている
// errors：hookformのerrorsオブジェクト
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

import { RequiredLabel } from '../../../components/atoms/RequiredLabel'
import {
  formItemWrap,
  formItemContainer,
  formItemTitleContainer,
  formLabelWrap,
  formItemTitle,
  formItemContentContainer,
  formItemContent,
  formItemContentDate,
  formItemError
} from '../../../../style/pages/Form'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'

// style
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('ja', ja)

type FormInputProps = {
  register?: FIXME
  type?: string
  placeholder: string
  name: string
  validate: FIXME
  title: string
  errors: FIXME
  onChange:FIXME
  onBlur:FIXME
  selected: FIXME
}

export const FormInputDate = (props: FormInputProps) => {
  const title = props.title
  const placeholder = props.placeholder
  const name = props.name
  const validate = props.validate
  const errors = props.errors
  const errorMsg = errors[name]
    ? errors[name].message
      ? errors[name].message
      : 'エラーが発生しました'
    : ''
    const calendarIcon = css`
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 1;
    top: 11px;
    right: 24px;
    cursor: pointer;
  `


    // アイコンクリックした時カレンダーを表示
  const handleClick = () => {
    const target = document.getElementById('formDatePicker')
    if (target) {
      target.click()
    }
  }
  const isWeekday = (date: Date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }
  const today = new Date()
  const minDate: any = today.setDate(today.getDate() + 1)
  const maxDate: any = today.setDate(today.getDate() + 31)

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
          <div
            css={formItemContentDate}
          >
            <img
                  src={'/img/svgs/calendar.svg'}
                  alt=''
                  css={calendarIcon}
                  onClick={handleClick}
            />
            <DatePicker
                id={'formDatePicker'}
                placeholderText={placeholder}
                selected={props.selected}
                onChange={props.onChange}
                locale='ja'
                dateFormat='yyyy/MM/dd'
                minDate={minDate}
                maxDate={maxDate}
                filterDate={isWeekday}
              />
          </div>
          <p css={formItemError}>{errorMsg}</p>
        </div>
      </div>
    </div>
  )
}
