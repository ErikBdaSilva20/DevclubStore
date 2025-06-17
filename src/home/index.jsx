import { NavLinks } from '../components/NavLinks/index.jsx'
import { MainContent } from '../components/MainContent/index.jsx'
import { Title } from '../components/Title'
import { Container, Header, MainContainer } from './styles.js'

export function Home() {
  return (
    <Container>
      <Header>
        <Title />
        <NavLinks />
      </Header>

      <MainContainer>
        <MainContent />
      </MainContainer>
    </Container>
  )
}
