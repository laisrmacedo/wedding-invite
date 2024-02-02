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
  background-color: rgb(255, 255, 255);
  .transition{
    opacity: ${(props) => props.loaded? 1 : 0}; 
    transition: opacity 2s ease-in-out;
  }
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .index-0{
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    min-width: 300px;
    height: 100%;
    background-color: rgb(254, 249, 243);
    backdrop-filter: blur(8px);
    
    /* border: 5px green solid; */
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      /* filter: blur(20px); */
      /* filter: saturate(0.5); */
    }
  }
  .index-1{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    span{
      backdrop-filter: blur(8px);
      width: 100%;
    }
    figure{
      display: flex;
      justify-content: flex-end;
      align-items: end;
      width: 50%;
      height: 100%;
    }
    img{
      object-fit: cover;
      /* width: 40%; */
      
      height: 35%;
    }
  }
  .index-2{
    background-color: rgb(254, 249, 243);
    /* border: 5px green solid; */
    position: absolute;
    z-index: 2;
    min-width: 300px;
    width: 40%;
    display: flex;
    justify-content: center;
  }
`

export const Container = (props) => {
  const [loaded, isLoaded] = useState(false)
  useEffect(() => isLoaded(true), [])

  return(
    <Content loaded={loaded}>
      <div className='index-0'>
        <img src={background}/>
      </div>
      <div className='index-1'>
        <span></span>
        {/* <figure> */}
          {/* <img src={planta}/> */}
        {/* </figure> */}
        {/* <span></span> */}
      </div>
      <div className='index-2'>
        {props.children}
      </div>
    </Content>
  )
}