import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  div{
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 99px;
    background-color: ${(props) => props.theme['gray-400']};

    svg{
      color: ${(props) => props.theme['gray-600']};
    }
  }

  p{
    width: 180px;
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