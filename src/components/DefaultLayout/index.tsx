import { BlurEffect, Container, Ruler, SectionHero, SectionMemories } from "./styles";
import { Hero } from "../../components/Hero";
import { SignIn } from "../../components/SignIn";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

export interface IUserInfo {
  id: string,
  name: string,
  avatar_url: string
}

type ContextType = { user: IUserInfo | null };

export function DefaultLayout(){

  const navigate = useNavigate();

  const [user, setUser] = useState<IUserInfo | null>(() => {
    
    const userCookie = localStorage.getItem('@Time-line:user-info')

    if(userCookie){
      return JSON.parse(userCookie);
    }

    return null;
  });

  function cleanUserProfileData(){
    localStorage.setItem('@Time-line:user-info','');
    setUser(null);
    navigate('/');
  }

  function logInNewUserData(user: IUserInfo){
    localStorage.setItem('@Time-line:user-info',JSON.stringify(user));
    setUser(user);
  }

  return (
    <Container>

      <SectionHero>
        <BlurEffect />
        <Ruler />
        
        <SignIn 
          user={user}
          onClearUserProfileData={cleanUserProfileData}
          onNewUserLogIn={logInNewUserData}
        />
        <Hero user={user}/>
        <p>Feito com 💜 no NLW da Rocketseat</p>
      </SectionHero>

      <SectionMemories>
        <Outlet context={{user}}/>
      </SectionMemories>
    </Container>
  )
}

export function useUser() {
  return useOutletContext<ContextType>();
}