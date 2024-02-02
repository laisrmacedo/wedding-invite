import styled from 'styled-components'
import { Container } from "../components/Container"
import { WppBtn } from '../components/WppBtn'

const Main = styled.main`
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export const Error = () => {
  return(
    <Container>
      <Main>
        <h3>OPS!</h3>
        <p>Algo está errado.</p>
        <WppBtn/>  
      </Main>
    </Container>
  )
}


