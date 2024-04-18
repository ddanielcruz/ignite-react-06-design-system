import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  fontWeight: '$medium',
  color: '$white',
  borderRadius: '$md',
  border: 0,
})

export function App() {
  return <Button>Click me</Button>
}
