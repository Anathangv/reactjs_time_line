import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 99px;

    img{
      width: 40px;
      height: 40px;
      border-radius: 99px;
    }

    div{
      display: block;
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
    }
`