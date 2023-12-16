import { IUserInfo } from "../DefaultLayout";
import { ProfileContainer } from "./styles";

interface IProfileProps {
  user: IUserInfo,
  onCleanUserProfile: () => void;
}

export function Profile({ user, onCleanUserProfile } : IProfileProps){

  return(
    <ProfileContainer>
      <img src={user.avatar_url} alt="imagem do usuário logado"/>
      <div>
        <p>{user.name}</p>
        <p><span onClick={onCleanUserProfile}>Sair</span></p>
      </div>
    </ProfileContainer>
  )
}
