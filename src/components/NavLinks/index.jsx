import { Container, NavLink, List, Nav } from './styles.js'

export function NavLinks() {
  return (
    <Container>
      <Nav>
        <List>
          <NavLink>Home</NavLink>
          <NavLink>Produtos</NavLink>
          <NavLink>Contato</NavLink>
        </List>
      </Nav>
    </Container>
  )
}
