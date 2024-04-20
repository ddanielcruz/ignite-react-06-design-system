import { styled } from '../styles'

const BoxComponent = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = React.ComponentProps<typeof BoxComponent> & {
  as?: React.ElementType
}

export const Box: React.FC<BoxProps> = BoxComponent

Box.displayName = 'Box'
