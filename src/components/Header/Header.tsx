import { HeaderBlock, Container, StyledNavLink } from './Header.styled'

export const Header = () =>
{
  return (
    <HeaderBlock>
      <Container>
        <StyledNavLink to="/" end>
          ToDo
        </StyledNavLink>
        <StyledNavLink to="/list">
          List
        </StyledNavLink>
      </Container>
    </HeaderBlock>
  )
}