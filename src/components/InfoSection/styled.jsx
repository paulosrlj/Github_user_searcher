import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 70vw;
  height: 80vh;

  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 1100px;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 95%;

  flex-direction: column;
  justify-content: space-evenly;

  color: var(--text-color);

  background: linear-gradient(90deg, #6d5050, #f15a5a);

  border-radius: 5px 0 0 5px;

  margin: 0;

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 75%;
  cursor: pointer;

  border-radius: 50%;
  transition: transform 0.3s ease-in;

  &:hover {
    transform: translateY(-20px);
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const NamesDiv = styled.div`
  text-align: center;

  @media (max-width: 600px) {
    margin: 10px 0;
  }

  p {
    padding: 5px;
  }
`;

export const FollowBoxDiv = styled.div`
  display: flex;
  text-align: center;

  justify-content: space-around;

  width: 100%;
  margin: 0 auto;

  p {
    padding: 5px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

export const FollowersDiv = styled.div`
  @media (max-width: 1000px) {
    margin: 10px auto;
  }
`;

export const FollowDiv = styled.div`
  @media (max-width: 1000px) {
    margin: 10px auto;
  }
`;

export const RepoInfo = styled.div`
  border-radius: 0 5px 5px 0;
  background: linear-gradient(90deg, #c31432, #240b36);
  width: 80%;
  height: 95%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 1.8rem;
    align-self: flex-start;
    margin: 20px 0 0 40px;

    color: var(--text-color);
  }

  h3 {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    h1 {
      align-self: center;
      margin: 30px auto;
    }
  }
`;

export const Repositorys = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Repository = styled.div`
  transition: transform 0.3s ease-in;
  width: 40%;
  height: 75px;

  border: 1px solid black;
  color: var(--text-color);
  box-shadow: black 2px 2px 5px;

  margin: 10px auto;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateX(20px);
    cursor: pointer;
  }

  h3 {
    align-self: center;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const RepoIconsDiv = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 12px;
`;
