import styled from 'styled-components';

export const ImagePickerContainer = styled.div`
  display: flex;

  input[type="file"]{
    visibility: hidden;
    width: 0;
    height: 0;
  }

  img{
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 16px;
  }
`