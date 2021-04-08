

export const Select = ({ register, options, name, ...rest }: any) => {
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
    <select name={name} ref={register} {...rest} css={inputStyle}>
      {options.map((value: any) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
