import { Inner } from './styles/jumbotron.js'

export default function Jumbotron ({
  childeren,
  direction = 'row',
  ...restProps
}) {
  return (
    <Inner direction={direction}>
      <h1>Hello World</h1>
    </Inner>
  )
}

Jumbotron.Container = function JumbotronContainer ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
