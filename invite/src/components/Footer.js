import styled from 'styled-components'
import logoLandingPage from '../assets/logo-landing-page.png'

const Content = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  position: relative;
  /* border: 1px solid red; */
  padding-bottom: 10px;
  p{
    font-size: 9px;
  }
  a{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 16px;
    :hover{
      opacity: 0.5;
    }
  }
  img{
    height: 100%;
    filter: sepia(1);
  }
`

export const Footer = () => {
  return(
    <Content>
      <a href='https://laisrmacedo.github.io/convitespersonalizados/' target='_blank'><img src={logoLandingPage}/></a>
      <p>© 2023 &nbsp; Todos os direitos reservados.</p>
    </Content>
  )
}