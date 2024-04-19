import { Check } from '@phosphor-icons/react'
import type { CheckboxProps } from '@radix-ui/react-checkbox'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export { CheckboxProps }

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
