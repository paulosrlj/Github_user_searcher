import React from 'react';

import { HeaderStyle, ButtonUser, InputUser, StyledIcon } from './styled';

function Header() {
  return (
    <HeaderStyle>
      <div>
        <form>
          <InputUser type='text' placeholder='Enter github username' />
          <ButtonUser type='submit'>
            <StyledIcon />
          </ButtonUser>
        </form>
      </div>
    </HeaderStyle>
  );
}

export default Header;
