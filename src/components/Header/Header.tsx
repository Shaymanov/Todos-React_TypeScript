import classes from './Header.module.scss'
import { HeaderBlock, Container, StyledNavLink } from './Header.styled'

export const Header = () =>
{
  const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
  {
    return isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
  }

  return (
    <HeaderBlock className={classes.header}>
      <Container className={classes.container}>
        <StyledNavLink to="/" className={getActiveClass}>
          ToDo
        </StyledNavLink>
        <StyledNavLink to="/list" className={getActiveClass}>
          List
        </StyledNavLink>
      </Container>
    </HeaderBlock>
  )
}
