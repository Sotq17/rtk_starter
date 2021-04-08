

export const Spinner = () => {
  const spinner = `
  width: 50px;
  height: 50px;
  border: 10px solid #dddddd;
  border-top-color: #aaaaaa;
  border-radius: 50%;
  animation: 1s spin infinite linear;
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`
  return <div css={spinner} />
}

export const SpinnerSmall = () => {
  const spinnerSmall = `
  width: 8px;
  height: 8px;
  border: 4px solid #dddddd;
  border-top-color: #aaaaaa;
  border-radius: 50%;
  animation: 1s spin infinite linear;
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`

  return <div css={spinnerSmall} />
}
