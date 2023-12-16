import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 50% 50%;
`

export const SectionHero = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 120px;
  overflow: hidden;
  border-right: 3px solid ${(props) => props.theme['gray-400']};

  p{
    font-size: 14px;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const BlurEffect = styled.div`
  position: absolute;
  height: 288px;
  width: 526px;
  right: 0;
  top: 50%;
  transform: translateY(-50%); 
  transform: translateX(50%); 
  background-color: ${(props) => props.theme['purple-700']};
  border-radius: 999px;
  opacity: 50%;
  filter: blur(194px);
`

export const Ruler = styled.div`
  border: 1px solid red;
  position: absolute;
  width: 8px;
  right: 0;
  bottom: 0;
`

export const SectionMemories = styled.section`
  padding: 64px;
  overflow-y: auto;

  > p{
    max-width: 360px;
    text-align: center;

    a{
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
