import styled from 'styled-components'

export const Container = styled.div``

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const NavLink = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #00f1ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
