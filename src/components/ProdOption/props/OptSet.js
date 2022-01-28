import React, { useState } from 'react';
import * as S from './OptSet.style';

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
        {[...Array(optBoxNumber)].map((el, idx) => {
          return (
            <S.OptBox key={idx}>
              <S.OptBoxBar>
                <S.OptBoxDeleteBtn onClick={handleMinueOptBox}>
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
              {[...Array(subOptNumber)].map((el, idx) => {
                return (
                  <div key={idx}>
                    <div>ㄴ</div>
                    <input type="text" placeholder="상품 판매가 (필수)" />
                    <input type="text" placeholder="상품 판매가 (필수)" />원
                    <S.OptBoxDeleteBtn onClick={handleMinusSubOpt}>
                      삭제
                    </S.OptBoxDeleteBtn>
                  </div>
                );
              })}

              <S.AddOptBox onClick={handlePlusSubOpt}>
                <S.AddOptBoxBtn>+</S.AddOptBoxBtn>
                <S.AddOptBoxText>추가 옵션 상품 추가</S.AddOptBoxText>
              </S.AddOptBox>
            </S.OptBox>
          );
        })}
        <S.AddOptBtn onClick={handleOptBox}>+ 옵션 추가</S.AddOptBtn>
      </S.OptSetContent>
    </S.OptSetSection>
  );
}

export default OptSet;
