import styled from 'styled-components'
import background from "../assets/background.jpeg";
import { useEffect, useState } from 'react';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  background: rgb(189, 176, 161);

  .transition{
    opacity: ${(props) => props.loaded === 1? 1 : 0}; 
    transition: opacity 2s ease-in-out;
  }
  .index-0{
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .index-1{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .index-2{
    background-color: rgb(254, 249, 243);
    position: absolute;
    z-index: 2;
    min-width: 350px;
    width: 40%;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const Container = (props) => {
  const [loaded, isLoaded] = useState(false)
  useEffect(() => isLoaded(true), [])

  return(
    <Content loaded={loaded? 1:0}>
      <div className='index-0 transition'>
        <img src={background}/>
      </div>
      <div className='index-1'></div>
      <div className='index-2'>
        {props.children}
      </div>
    </Content>
  )
}