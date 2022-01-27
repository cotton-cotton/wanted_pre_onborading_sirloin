import React, { useState } from 'react';

import * as S from './Toggle.style';

export const ToggleBtn = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBox = e => {
    const { checked } = e.target;
    setIsActive(checked);
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
