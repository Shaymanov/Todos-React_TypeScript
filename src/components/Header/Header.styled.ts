import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderBlock = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;
    transition: color 0.3s ease;

    &.active {
        color: #ffffff99;
    }

    &:hover {
        color: #e0e0e0;
    }
`