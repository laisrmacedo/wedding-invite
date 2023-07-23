import styled from 'styled-components'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import whatsapp from '../assets/whatsapp.png'

const Main = styled.main`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    >span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 20px;
      h1{
        font-size: 28px;
      }
      p{
        font-size: 16px;
      }
    }
`

export const Location = () => {
  return(
    <Container>
      {/* link : https://goo.gl/maps/q5gau8ej3HoRxxwW9 */}
      <Main>
        <Header/>
        <span>
          <h1>Sobre o Local</h1>
          <p>Cerimônia e Recepção</p>
        </span>
        <a className="wppBtn" href='https://wa.me/+558796267434' target='_blank'><img src={whatsapp}/> Mais Informações</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31608.80093526025!2d-38.256219714261285!3d-7.988596835667925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x7a717949cbe7603%3A0xd3b0202319a5be8!2sPol%C3%ADcia%20Rodovi%C3%A1ria%20Federal!3m2!1d-7.988726499999999!2d-38.2555982!4m3!3m2!1d-7.992889399999999!2d-38.222529099999996!5e0!3m2!1spt-BR!2sde!4v1690064939510!5m2!1spt-BR!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        style={{ border: 0, width:'100%', height:'65%', filter: 'saturate(0.4)' }}
        ></iframe>
      </Main>
    </Container>
  )
}