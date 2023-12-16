import { api } from "../../lib/axios";
import { LoginContainer } from "./styles";
import { User } from "phosphor-react";
import { Profile } from "../Profile";
import { IUserInfo } from "../DefaultLayout";

interface ISignInProps {
  user: IUserInfo | null,
  onClearUserProfileData: () => void,
  onNewUserLogIn: (user: IUserInfo) => void,
}

export function SignIn({ user, onClearUserProfileData, onNewUserLogIn }: ISignInProps){
 
  function handleCreateNewAccount(){
    api.get("/users/anathangv")
    .then( response  => {
        const userInfo : IUserInfo = response.data;

        onNewUserLogIn({
          id: userInfo.id,
          name: userInfo.name,
          avatar_url: userInfo.avatar_url
        } as IUserInfo);

        console.log(userInfo, user)
    })
    .catch(error => {
      console.error("Error", error);
    });
  }


  return(
    <>
      {user 
      ? 
        <Profile 
          user={user} 
          onCleanUserProfile={onClearUserProfileData}
        />
      : 
      <LoginContainer>
        <div>
          <User size={20} />
        </div>
        <p><span onClick={handleCreateNewAccount}>Crie sua conta</span> e salve suas memórias!</p>
      </LoginContainer>}
    </>
  )
}
