import React, { useState } from 'react';
import * as S from './OptSet.style';
import OptOfOptSet from './OptOfOptSet';

function OptSet({ optSetDeleteBtn, id }) {
  const [optBoxNumber, setOptBoxNumber] = useState(1);
  const [subOptNumber, setSubOptNumber] = useState(0);

  const handleOptBox = () => {
    setOptBoxNumber(prev => prev + 1);
  };

  const handleMinueOptBox = () => {
    setOptBoxNumber(prev => (prev === 1 ? 1 : prev - 1));
  };

  const handlePlusSubOpt = () => {
    setSubOptNumber(prev => prev + 1);
  };

  const handleMinusSubOpt = () => {
    setSubOptNumber(prev => prev - 1);
  };
  return (
    <S.OptSetSection>
      <S.OptSetBar>
        <S.DeleteBtn onClick={() => optSetDeleteBtn(id)}>삭제</S.DeleteBtn>
      </S.OptSetBar>
      <S.OptSetContent>
        <S.AddImgBox>
          <S.AddImgBtn>+ 이미지 첨부</S.AddImgBtn>
        </S.AddImgBox>
        {[...Array(optBoxNumber)].map((el, idx) => (
          <OptOfOptSet
            key={idx}
            handleMinueOptBox={handleMinueOptBox}
            handlePlusSubOpt={handlePlusSubOpt}
          />
        ))}
        <S.AddOptBtn onClick={handleOptBox}>+ 옵션 추가</S.AddOptBtn>
      </S.OptSetContent>
    </S.OptSetSection>
  );
}

export default OptSet;
