import styled from 'styled-components';

export const MemoryEmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  p{
    max-width: 360px;
    text-align: center;

    span{
      text-decoration: underline;
      transition: 0.4s;
      
      &:visited{
        color: ${(props) => props.theme['gray-100']};
      }

      &:hover{
        color: ${(props) => props.theme['gray-50']};
        cursor: pointer;
      }
    }
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
    aspect-ratio: 22 / 9;
    object-fit: cover;
    border-radius: 16px;
  }

  > p{
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  > time{
    color: ${(props) => props.theme['gray-50']};
    font-size: 12px;
    margin-left: -63px;
  }

  > span{
    color: ${(props) => props.theme['gray-200']};
    transition: 0.4s;
    font-size: 14px;
    display: flex;
    align-items: center;

    &:hover{
      color: ${(props) => props.theme['gray-50']};
      cursor: pointer;
    }
  }
`
