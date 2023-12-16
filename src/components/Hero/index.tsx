import { HeroContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom"
import { IUserInfo } from "../DefaultLayout";

interface IHeroProps {
  user: IUserInfo | null,
}

export function Hero({ user }:IHeroProps){
  const navigate = useNavigate();

  function handleNavigateNewMemory(){
    navigate('/Memory/New');
  }

  return(
    <HeroContainer>
      <img src={logo} />
      <div>
        <h1>Sua cápsula do tempo</h1>
        <p>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
      </div>
      <button 
        type='button'
        disabled={user === null} 
        onClick={handleNavigateNewMemory}>CADASTRAR LEMBRANÇA</button>
    </HeroContainer>
  )
}
