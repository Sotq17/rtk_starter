// ReactHookFormを子要素と繋げるmodule
import { useFormContext } from 'react-hook-form/dist/index.ie11'
export const ConnectForm = ({ children }: any) => {
  const methods = useFormContext()

  return children({ ...methods })
}
