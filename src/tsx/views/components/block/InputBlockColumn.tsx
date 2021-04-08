
import { Input } from '../atoms/Input'

interface inputProps {
  name: string
  text?: string
  type: string
  placeholder: string
}

export const InputBlockColumn = (props: inputProps) => {
  const inputText = `
    margin-bottom: 10px;
    font-size: 14px;
  `
  return (
    <div>
      <p css={inputText}>{props.text}</p>
      <Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  )
}
