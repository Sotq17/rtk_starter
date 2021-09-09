/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form/dist/index.ie11'
import { useSelector } from 'react-redux'
import { selectEntryInfo } from '../../../../stores/slices/formInfoSlice'
import { prefectures } from '../../../../utils/constants'
import { FormInput } from './FormInput'
import { FormInputDate } from './FormInputDate'
import { FormSelect } from './FormSelect'
import { FormZipCode } from './FormZipCode'

export const FormMain = () => {
  const { register, handleSubmit, errors, control } = useForm()
  const onSubmit = (data: any) => console.log(data)


  const formWrap = css`
    max-width:800px;
    margin:auto;
  `

  const prefTarget:FIXME = document.getElementById("prefSelect")
  const cityTarget: FIXME = document.getElementById("cityInput")
  const addressTarget: FIXME = document.getElementById("addressInput")


  const storedInfo = useSelector(selectEntryInfo)
  useEffect(() => {
    console.log(storedInfo.Pref)
    if (prefTarget) {
      prefTarget.value = storedInfo.Pref
    }
    if (cityTarget) {
      cityTarget.value = storedInfo.City
    }
    if (addressTarget) {
      addressTarget.value = storedInfo.Address
    }
  },[storedInfo])
  return (
    <div css={formWrap}>


    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        title={'苗字'}
        register={register}
        type={'text'}
        placeholder={'姓'}
        name={'LastName'}
        validate={{ required: '姓の入力は必須です' }}
        errors={errors}
      />
      <FormInput
        title={'名前'}
        register={register}
        type={'text'}
        placeholder={'名'}
        name={'Firstname'}
        validate={{ required: '名の入力は必須です' }}
        errors={errors}
      />
      <FormInput
        title={'メールアドレス'}
        register={register}
        type={'text'}
        placeholder={'example@example.com'}
        name={'Email'}
        validate={{
          required: 'メールアドレスの入力は必須です',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'メールアドレスの形式が間違っています'
          }
        }}
        errors={errors}
      />
      <FormInput
        title={'電話番号'}
        register={register}
        type={'tel'}
        placeholder={'09012345678'}
        name={'MobileNumber'}
        validate={{
          required: '電話番号の入力は必須です',
          minLength: { value: 6, message: '電話番号の形式が間違っています' },
          maxLength: { value: 12, message: '電話番号の形式が間違っています' }
        }}
        errors={errors}
      />
      <FormSelect
        title={'Select'}
        register={register}
        name={'Select'}
        validate={{}}
        errors={errors}
      >
        <option value="" hidden>選択してください</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </FormSelect>

      <FormZipCode
        title={'郵便番号'}
        register={register}
        type={'text'}
        placeholder={'郵便番号'}
        name={'ZipCode'}
        validate={{ required: '郵便番号の入力は必須です' }}
        errors={errors}
      />


      <FormSelect
        title={'都道府県'}
        register={register}
        name={'Pref'}
        validate={{required: '都道府県の入力は必須です'}}
        errors={errors}
        >
        <option value="" hidden>選択してください</option>
        {prefectures.map((pref) => {
          return <option value={pref.key} key={pref.key}>{pref.value}</option>
      })}
      </FormSelect>

      <FormInput
        title={'市区町村'}
        register={register}
        type={'text'}
        placeholder={'市区町村'}
        name={'City'}
        validate={{ required: '市区町村の入力は必須です' }}
        errors={errors}
        />
        <FormInput
        title={'番地'}
        register={register}
        type={'text'}
        placeholder={'番地'}
        name={'Address'}
        validate={{ required: '番地の入力は必須です' }}
        errors={errors}
        />
      <FormInput
        title={'建物名'}
        register={register}
        type={'text'}
        placeholder={'建物名'}
        name={'Building'}
        validate={{}}
        errors={errors}
        />

        <Controller
          rules={{
            required:"日付は必須です",
          }}
          control={control}
          name='Date'
          defaultValue={""}
          render={({onChange, onBlur, value }) => (
            <FormInputDate
              title={'日付'}
              placeholder={'日付'}
              name={'Date'}
              validate={{required:"日付は必須です"}}
              errors={errors}
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />


      <input type="submit" />
      </form>
      </div>
  )
}
