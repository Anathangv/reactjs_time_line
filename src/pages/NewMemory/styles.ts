import styled, { keyframes } from 'styled-components';

export const NewMemoryContainer = styled.div`
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

    svg{
      width: 15px;
    }
  } 
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const FormMemory = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;

  div:first-child {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 16px;

    span{
      display: flex;
      align-items: center;
      display: flex;
      gap: 5px;
      color: ${(props => props.theme['gray-200'])};
      transition: 0.4ms;

      label{
        transition: 0.4s;

        &:hover{
          cursor: pointer;
        }
      }
    }

    & > label{
      color: ${(props => props.theme['gray-200'])};
      display: flex;
      gap: 5px;

      &:hover{
        cursor: pointer;
      }

      & > input[type='checkbox']{
        cursor: pointer;
      }
    }

    svg{
      width: 16px;
    }
  }

  textarea{
    display: flex;
    width: 100%;
    flex: 1;
    resize: none;
    border-radius: 4px;
    border: 0;
    background: transparent;
    padding: 0;
    font-size: 18px;
    line-height: 20px;
    color: ${(props => props.theme['gray-100'])};

    &::placeholder{
      color: ${(props => props.theme['gray-400'])};
    }

    &:focus{
      outline: none;
    }
  }

  button{
    align-self: self-end;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;


    &:hover{
      background-color: ${(props) => props.theme['green-600']};
      transition: 0.4s;
      cursor: pointer;
    } 

    svg{
      width: 20px;
      animation: ${rotateAnimation} 1s linear infinite;
    }
  }
`;