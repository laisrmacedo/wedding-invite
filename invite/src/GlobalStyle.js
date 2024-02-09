import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgb(204, 93, 39);
    text-align: center;
    overflow: hidden;

    ::-webkit-scrollbar-track {
      background: transparent; 
    };
    ::-webkit-scrollbar{
      width: 8px;
    };
    ::-webkit-scrollbar-thumb {
      background: rgba(124,161,191,0.1);
      border-radius: 4px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(124,161,191,0.2); 
    }
    ::-webkit-scrollbar-thumb:active {
      background: rgba(124,161,191,0.3); 
    }
  }

  main{
    display: flex;
    width: 100%;
    max-width: 420px;
    -webkit-backdrop-filter: blur(3px);
    min-height: 550px;
    height: calc(100vh - 40px);
  }

h1{
  font-weight: 200;
  font-family: 'Italiana', sans-serif;
}

h2{
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-family: 'Dosis', sans-serif;
}
h3{
  font-family: 'Dosis', sans-serif;
}

p{
  width: 80%;
  font-weight: 200;
  font-size: min(10vw, 18px);
  font-family: 'Dosis', sans-serif;
}

.btn{
  font-family: 'Dosis', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: rgb(254, 249, 243);
  border-radius: 8px;
  border: none;
  margin: 10px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.wppBtn{
  width: 160px;
  height: 30px;
  padding: 8px 20px;

  img{
    height: 100%;
  }
}

.listBtn{
  width: 280px;
  height: 60px;
  padding: 8px 20px;

  img{
    height: 80%;
    margin-right: 10px;
  }
}

.checkBtn{
  width: 80px;
  padding: 4px 10px;
  height: 24px;
}

.title{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#animation-container{
  width: 200px;
}

.icons{
  display: flex;
  width: 80%;
  justify-content: space-evenly;
}
`
