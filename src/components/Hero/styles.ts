import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;

  img{
    width: 160.765px;
    height: 48px;
  }

  div{
    h1{
      color: ${(props) => props.theme['gray-50']};
      font-size: 40px;
      font-weight: 700;
      line-height: 125%;
    }

    p{
      font-size: 18px;
      line-height: 160%;
    }
  }

    button{
      padding: 12px 20px;
      background-color: ${(props) => props.theme['green-400']};
      border-radius: 999px;
      color: ${(props) => props.theme['gray-900']};
      font-weight: 700;
      font-size: 14px;
      font-family: "Bai Jamjuree";
      text-transform: uppercase;
      width: 214px;
      border: none;

      &:hover{
        background-color: ${(props) => props.theme['green-600']};
        transition: 0.4s;
        cursor: pointer;
      }

      &:disabled {
        background-color: ${(props) => props.theme['gray-200']};
        cursor: not-allowed;
      }
    }
`;