import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { HeaderBlock, Container, StyledNavLink, ToggleButton } from './Header.styled'

export const Header = () =>
{
  const dispatch = useDispatch()

  return (
    <HeaderBlock>
      <Container>
        <StyledNavLink to="/" end>
          ToDo
        </StyledNavLink>
        <StyledNavLink to="/list">
          List
        </StyledNavLink>

        <ToggleButton>
          <button onClick={() => dispatch(toggleThemeAction())}>&#9775;</button>
        </ToggleButton>
      </Container>
    </HeaderBlock>
  )
}