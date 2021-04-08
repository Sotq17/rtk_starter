
import { ConnectForm } from '../modules/ConnectForm'

interface inputProps {
  name: string
  text?: string
  type: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export const Input = (props: inputProps) => {
  const inputStyle = `
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    height: 40px;
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
  `

  return (
    <ConnectForm>
      {({ register }: any) => (
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          css={inputStyle}
          ref={register}
        />
      )}
    </ConnectForm>
  )
}
