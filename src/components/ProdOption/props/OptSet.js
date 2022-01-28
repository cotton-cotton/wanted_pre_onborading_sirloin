import React from 'react';
import * as S from './OptSet.style';

function OptSet({ optSetDeleteBtn, id }) {
  return (
    <S.OptSetSection>
      <S.OptSetBar>
        <S.DeleteBtn>삭제</S.DeleteBtn>
      </S.OptSetBar>
      <S.OptSetContent>
        <S.AddImgBox>
          <S.AddImgBtn>+ 이미지 첨부</S.AddImgBtn>
        </S.AddImgBox>
        <S.OptBox>
          <S.OptBoxBar>
            <S.OptBoxDeleteBtn onClick={() => optSetDeleteBtn(id)}>
              삭제
            </S.OptBoxDeleteBtn>
          </S.OptBoxBar>
          <S.InputOptName
            type="text"
            placeholder="옵션명을 입력해 주세요. (필수)"
          />
          <S.OptInfo>
            <S.NormalPriceSection>
              <S.InputNormalPrice
                type="text"
                placeholder="상품 정상가 (필수)"
              />
              원
            </S.NormalPriceSection>
            <S.DiscountSection>
              <S.InputDiscountRate />%
            </S.DiscountSection>
            <S.SellingPriceSection>
              <S.InputSellingPrice
                type="text"
                placeholder="상품 판매가 (필수)"
              />
              원
            </S.SellingPriceSection>
            <S.StockSection>
              <S.InputStock type="text" placeholder="재고 (필수)" />개
            </S.StockSection>
            <S.TaxSection>
              <S.TaxBtn>비과세</S.TaxBtn>
            </S.TaxSection>
          </S.OptInfo>
          <S.AddOptBox>
            <S.AddOptBoxBtn>+</S.AddOptBoxBtn>
            <S.AddOptBoxText>추가 옵션 상품 추가</S.AddOptBoxText>
          </S.AddOptBox>
        </S.OptBox>
        <S.AddOptBtn>+ 옵션 추가</S.AddOptBtn>
      </S.OptSetContent>
    </S.OptSetSection>
  );
}

export default OptSet;
