import styled from 'styled-components'

const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  cursor: pointer;

  img{
    height: 36px;
    opacity: .7;
  }
  p{
    font-weight: 400;
    font-size: min(2.6vw, 12px);
    text-transform: uppercase;
  }
`

export const Button = (props) => {
  return(
    <Span onClick={props.onClick}>
      <img src={props.img}/>
      <p>{props.text}</p>
    </Span>
  )
}