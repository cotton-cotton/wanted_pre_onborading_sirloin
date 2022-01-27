import React from 'react';

import * as S from './ToggleSetting.style';
import { ToggleBtn } from '../ToggleSwitch/ToggleBtn';

export const ToggleSetting = ({ title, content }) => {
  const [isToggleOn, setIsToggleOn] = useState();
  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.ContentBox>
        <S.SubTitle>{content}</S.SubTitle>
        <S.Content>
          <ToggleBtn />
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
};
