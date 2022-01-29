import React from 'react';
import * as S from './SubOptBox.style';

function SubOptBox({ handleMinusSubOpt }) {
  return (
    <S.SubOptBox>
      <S.NieunSign>ㄴ</S.NieunSign>
      <S.SubOptBoxInput type="text" placeholder="상품 판매가 (필수)" />
      <S.SubOptBoxInput type="text" placeholder="상품 판매가 (필수)" />원
      <S.SubOptBoxBtn onClick={handleMinusSubOpt}>삭제</S.SubOptBoxBtn>
    </S.SubOptBox>
  );
}

export default SubOptBox;
