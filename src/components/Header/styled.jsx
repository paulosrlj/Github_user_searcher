import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const HeaderStyle = styled.header`
  justify-content: center;

  height: 20vh;
  width: 100%;

  display: flex;

  align-items: center;

  form {
    display: flex;
  }
`;

export const InputUser = styled.input`
  border: none;
  outline: none;

  padding: 20px;
  width: 40vw;

  border-radius: 5px 0 0 5px;

  @media (max-width: 1280px) {
    width: 60vw;
  }
`;

export const ButtonUser = styled.button`
  border: none;
  outline: none;
  padding: 20px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;

  background: #fff;
`;

export const StyledIcon = styled(FaSearch)`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.8);
  }
`;
