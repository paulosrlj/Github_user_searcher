import React, { useContext } from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

import {
  Section,
  UserInfo,
  ImageDiv,
  Img,
  FollowBoxDiv,
  FollowDiv,
  FollowersDiv,
  NamesDiv,
  RepoIconsDiv,
  Repository,
  RepoInfo,
  Repositorys,
} from './styled';

import { Context } from '../../contexts/PickUserNameContext';

function InfoSection() {
  const { fetched, repoInfo, userInfo } = useContext(Context);

  if (fetched) {
    const repos = repoInfo.map((repo) => (
      <Repository>
        <h3>{repo[0]}</h3>
        <RepoIconsDiv>
          <FaStar />
          {repo[1]}
          <FaCodeBranch />
          {repo[2]}
        </RepoIconsDiv>
      </Repository>
    ));

    return (
      <Section>
        <UserInfo>
          <ImageDiv>
            <Img src={userInfo[3]} alt='user image' />
          </ImageDiv>

          <NamesDiv>
            <p>{userInfo[0]}</p>
            <p>
              <strong>{userInfo[1]}</strong>
            </p>
          </NamesDiv>

          <FollowBoxDiv>
            <FollowersDiv>
              <p>Followers</p>
              <p>
                <strong>{userInfo[4]}</strong>
              </p>
            </FollowersDiv>

            <FollowDiv>
              <p>Follow</p>
              <p>
                <strong>{userInfo[5]}</strong>
              </p>
            </FollowDiv>
          </FollowBoxDiv>
        </UserInfo>

        <RepoInfo>
          <h1>Repos</h1>
          <Repositorys>{repos}</Repositorys>
        </RepoInfo>
      </Section>
    );
  }

  return (
    <Section>
      <UserInfo />

      <RepoInfo>
        <h1>Repos</h1>
      </RepoInfo>
    </Section>
  );
}

export default InfoSection;
