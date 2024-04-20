import { forwardRef } from 'react'

import { TextInputContainer, TextInputInput, TextInputPrefix } from './styles'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, ...props }, ref) => (
    <TextInputContainer>
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <TextInputInput ref={ref} {...props} />
    </TextInputContainer>
  ),
)

TextInput.displayName = 'TextInput'
