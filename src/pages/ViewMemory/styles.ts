import styled from 'styled-components';

export const ViewMemoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  gap: 5px;

  & > div{
    display: flex;
    justify-content: left;
    align-items: center;

    span{
      font-size: 14px;
      color: ${(props => props.theme['gray-200'])};
      transition: 0.4s;

      &:hover{
        color: ${(props => props.theme['gray-100'])};
        cursor: pointer;
      }
    }
  } 
  svg{
      width: 15px;
    }
`
export const MemoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  align-items:start;
  margin-bottom: 40px;

  img{
    width: 100%;
    aspect-ratio: 14 / 9;
    object-fit: cover;
    border-radius: 16px;
  }

  > time{
    font-size: 12px;
    margin-left: -63px;
  }
`