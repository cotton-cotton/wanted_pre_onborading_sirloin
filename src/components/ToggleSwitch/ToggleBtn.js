import React from 'react';

import * as S from './Toggle.style';

export const ToggleBtn = ({ onChange }) => {
  const handleCheckBox = e => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <S.SwitchWrapper>
      <S.CheckLabel>
        <S.InputCheck type="checkbox" onChange={handleCheckBox} />
        <S.Switch />
      </S.CheckLabel>
    </S.SwitchWrapper>
  );
};
