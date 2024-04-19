import { TextInputContainer, TextInputInput, TextInputPrefix } from './styles'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <TextInputInput {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
