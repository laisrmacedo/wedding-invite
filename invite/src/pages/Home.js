import styled from 'styled-components'
import { Container } from '../components/Container'
import location from "../assets/pin.png";
import logo from "../assets/logo.png";
import check from "../assets/check.png";
import gift from "../assets/gift.png";
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { goToCheck, goToError, goToGift, goToLocation } from '../router/coordinator';
import { BASE_URL } from '../App';
import axios from 'axios';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';

const Main = styled.main`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    max-height: 66vh;
  }
  >img{
    width: clamp(120px, 50%, 170px);
  }
  h1{
    font-size: min(10vw, 36px);
  }
  h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: min(5.8vw, 26px);
    span{
      font-size: 14px;
    }
  }
  >p{
    width: 75%;
    font-size: clamp(16px, 2vw, 20px);
  }

  .title{
    height: 14%;
    max-height: 90px;
    justify-content: space-between;
    p{
      text-transform: uppercase;
      font-size: 18px;
    }
  }
  .day{
    width: 65%;
    >div{
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      span{
        width: 50%;
        height: 1px;
        background-color: rgb(204, 93, 39);
      }
    }
  }
`


export const Home = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  const getGuests = async () => {
    try {
      const response = await axios.get(BASE_URL + `guests/`)
      const [foundGuest] = response.data.filter((guest) => guest.id === name)
      if (!foundGuest) {
        goToError(navigate)
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getGuests()
  }, [])

  return (
    <Container>
      <Main>
        <img src={logo} />
        <div className="title">
          <p>Com a benção de Deus e de seus pais</p>
          <h1>Bruna e Erivonaldo</h1>
        </div>
        <p>Convidam para sua cerimônia de casamento que será realizada</p>
        <div className="day">
          <div>
            <span></span>
            <p>Sábado, às 16h</p>
            <span></span>
          </div>
          <h2>
            22 &nbsp; <span>&hearts;</span> &nbsp;JUNHO&nbsp; <span>&hearts;</span> &nbsp;2024&nbsp;
          </h2>
        </div>
        <p>Clique nos ícones abaixo:</p>
        <div className="icons">
          <Button onClick={() => goToLocation(navigate, name)} img={location} text={"Local"} />
          <Button onClick={() => goToGift(navigate, name)} img={gift} text={"Presentes"} />
          <Button onClick={() => goToCheck(navigate, name)} img={check} text={"Confirmação de presença"} />
        </div>
      </Main>
      <Footer/>
    </Container>
  )
}