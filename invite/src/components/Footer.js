import styled from 'styled-components'

const Content = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 40px;
  /* border: 1px solid red; */
  /* position: absolute;
  z-index: 3;
  margin-bottom: 20px; */
  p{
    font-size: 8px;
  }
  span{
    font-size: 11px;
    font-family: 'Mali', cursive;
    font-variant: all-small-caps;
  }

`

export const Footer = () => {
  return(
    <Content>
      <a><span>Convites personalizados</span></a>
      <p>© 2023 &nbsp; Todos os direitos reservados.</p>
    </Content>
  )
}