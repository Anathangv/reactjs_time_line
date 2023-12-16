import { CaretLeft } from "phosphor-react";
import { MemoryContainer, ViewMemoryContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { memories } from "../../db/memories";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br"

dayjs.locale(ptBr);

export function ViewMemory(){

  const navigate = useNavigate();
  const { id } = useParams();
  const memory = memories.find(memory => memory.id === id);

  function handleReturnToTimeline(){
    navigate(-1);
  }

  return (
    <ViewMemoryContainer>
      <div>
        <CaretLeft size={32} />
        <span onClick={handleReturnToTimeline}>voltar à timeline</span>
      </div>

      {
      memory && 
      <MemoryContainer key={memory.id}>
        <time>{dayjs(memory.createdAt).format("D[ de ] MMMM[, ]YYYY")}</time>
        <img src={memory.coverUrl} alt=""/>
        <p>{memory.excerpt}</p>
      </MemoryContainer>
      }
    </ViewMemoryContainer>
  )
}
