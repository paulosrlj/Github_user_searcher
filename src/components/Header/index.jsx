/* eslint-disable camelcase */
import React, { useContext } from 'react';
import axios from 'axios';

import { HeaderStyle, ButtonUser, InputUser, StyledIcon } from './styled';
import { Context } from '../../contexts/PickUserNameContext';

function Header() {
  const { setRepoInfo, setUserInfo, setFetched } = useContext(Context);

  async function fetchApi(username) {
    setRepoInfo([]);
    setUserInfo([]);

    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        const {
          login,
          name,
          repos_url,
          avatar_url,
          followers,
          following,
        } = data;
        setUserInfo([login, name, repos_url, avatar_url, followers, following]);
        axios
          .get(repos_url)
          .then((res) => res.data)
          .then((repos) => {
            const repoList = [];

            for (let i = 0; i < 6; i += 1) {
              const { name: repoName, stargazers_count, forks } = repos[i];
              const info = [repoName, stargazers_count, forks];
              repoList.push(info);
            }

            setRepoInfo(repoList);
            setFetched(true);
          });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const input = document.querySelector('.userNameInput');

    fetchApi(input.value);
  }

  return (
    <HeaderStyle>
      <div>
        <form onSubmit={handleSubmit}>
          <InputUser
            className='userNameInput'
            type='text'
            placeholder='Enter github username'
          />
          <ButtonUser type='submit'>
            <StyledIcon />
          </ButtonUser>
        </form>
      </div>
    </HeaderStyle>
  );
}

export default Header;
