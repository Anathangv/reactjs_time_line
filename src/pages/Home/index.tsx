import { useNavigate } from "react-router-dom"
import { MemoryContainer, MemoryEmptyContainer } from "./styles";
import { memories } from "../../db/memories";
import { useUser } from "../../components/DefaultLayout";
import { ArrowRight } from "phosphor-react";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br"

dayjs.locale(ptBr);

export function Home(){
  const { user } = useUser();

  const navigate = useNavigate();

  function handleNavigateNewMemory(){
    navigate('/Memory/New');
  }

  function handleNavigateViewMemory(memoryId: string ){
    navigate(`/Memory/View/${memoryId}`);
  }

  if (user !== null && memories.length === 0){
    return (
      <MemoryEmptyContainer>
        <p>
          Você ainda não registrou nenhuma lembrança, comece a <span onClick={handleNavigateNewMemory}>criar agora!</span>
        </p>
      </MemoryEmptyContainer>
    )
  }

  if (user === null){
    return (
      <MemoryEmptyContainer>
        <p>
          Você ainda não registrou nenhuma lembrança, clique em criar sua conta!
        </p>
      </MemoryEmptyContainer>
    )
  }

  return (
    <div>
      {memories.map(memory => {
        return(
        <MemoryContainer key={memory.id}>
          <time>-- {dayjs(memory.createdAt).format("D[ de ] MMMM[, ]YYYY")}</time>
          <img src={memory.coverUrl} alt=""/>
          <p>{memory.excerpt}</p>
          <span 
            onClick={() => handleNavigateViewMemory(memory.id)}>
            {'Ler mais... '}<ArrowRight size={16} />
          </span>
        </MemoryContainer>
        )
      })}
    </div>
  )
}