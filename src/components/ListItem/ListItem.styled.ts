import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link) <{ $isDone: boolean }>`
    text-decoration: none;
    padding: 10px;
    color: ${({ $isDone }) => ($isDone ? '#29be29ff' : '#ff0000ff')};
`