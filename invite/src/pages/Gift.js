import styled from 'styled-components'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import bule from '../assets/bule.png'
import presente from '../assets/presente.png'
import { WppBtn } from '../components/WppBtn'
import { Footer } from '../components/Footer'

const Main = styled.main`
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 40px; 
  position: relative;
  z-index: 1;

  p{
    font-size: clamp(16px, 2vw, 20px);
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100%;
    height: 100%;
    h1{
      font-size: 28px;
    }
    h3{
      font-size: 20px;
    }
    span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 20px;
      gap: 8px;
      h1{
        font-size: 20px;
      }
    }
  }
`

export const Gift = () => {
  return(
    <Container>
      <Main>
        <Header showBtn={true}/>
        <div>
          <h1>Sobre Presentes</h1>
          <p>Para nos presentear, você pode escolher qualquer item das seguintes listas:</p>
          <span>
            <a className="btn listBtn" href='https://www.querodecasamento.com.br/lista-de-casamento/bruna--erivonaldo' target='_blank'><img src={bule}/><h3>CHÁ DE COZINHA</h3></a>
            <a className="btn listBtn" href='https://www.amazon.com.br/hz/wishlist/ls/3U1M9XRUA2T9G?ref_=wl_share' target='_blank'><img src={presente}/><h3>LISTA DE PRESENTES</h3></a>
          </span>
          <p>Fique à vontade!</p>
          <p>Aguardamos você no nosso grande dia.</p>
          <WppBtn/>
         </div>
      </Main>
      <Footer/>
    </Container>
  )
}