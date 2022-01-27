// 정빈 - 상품옵션(prod-option)  - 10 11 12 (이미지 추가 및 삭제 + 항목 추가 및 삭제)
import React from 'react';
import * as S from './ProdOption.style';

function ProdOption() {
  return (
    <S.ProOptSection>
      <S.ProOptContentBar>
        <S.ProOptBar>상품 옵션*</S.ProOptBar>
        <S.ProOptBtn>+ 옵션 세트 추가</S.ProOptBtn>
      </S.ProOptContentBar>
      <S.ProOptContent>
        <S.ProOptContentText>
          옵션세트를 추가하여 옵션을 구성해 주세요.
        </S.ProOptContentText>
      </S.ProOptContent>
    </S.ProOptSection>
  );
}

export default ProdOption;
