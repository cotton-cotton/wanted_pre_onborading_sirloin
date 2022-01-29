
import React, { useState } from 'react';
import * as S from '../ProdBasicInfo/ProdBasicInfo.Style';

function ProdBasicInfo() {
  const CATEGORY_LIST = [
    { id: 0, data: '첫번째 카테고리 입니다.' },
    { id: 1, data: '두번째 카테고리 입니다.' },
    { id: 2, data: '세번째 카테고리 입니다.' },
    { id: 3, data: '네번째 카테고리 입니다.' },
    { id: 4, data: '다섯번째 카테고리 입니다.' },
    { id: 5, data: '여섯번째 카테고리 입니다.' },
    { id: 6, data: '일곱번째 카테고리 입니다.' },
    { id: 7, data: '일곱번째 카테고리 입니다.' },
    { id: 8, data: '일곱번째 카테고리 입니다.' },
    { id: 9, data: '일곱번째 카테고리 입니다.' },
    { id: 10, data: '일곱번째 카테고리 입니다.' },
    { id: 11, data: '일곱번째 카테고리 입니다.' },
  ];
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter(el => el !== item));
    }
  };
  const onRemove = item => {
    setCheckedList(checkedList.filter(el => el !== item));
  };

  return (
    <S.Wrapper>
      <S.Title>상품 기본 정보</S.Title>
      <S.CategoryContainer>
        <S.Category>카테고리 *</S.Category>
        <S.SelectContainer>
          <S.CheckBox>
            {CATEGORY_LIST.map(item => {
              return (
                <S.Label key={item.id}>
                  <S.Check
                    type="checkbox"
                    value={item.data}
                    onChange={e => {
                      onCheckedElement(e.target.checked, e.target.value);
                    }}
                    checked={checkedList.includes(item.data) ? true : false}
                  />
                  <S.Type>{item.data}</S.Type>
                </S.Label>
              );
            })}
          </S.CheckBox>
          <S.SelectedBox>
            {checkedList.length === 0 && (
              <S.AlertMessage>{'카테고리를 지정해 주세요.'}</S.AlertMessage>
            )}
            {checkedList.map(item => {
              return (
                <S.SelectedCategory key={item}>
                  <S.Selected>{item}</S.Selected>
                  <S.CancelChecked onClick={() => onRemove(item)}>
                    X
                  </S.CancelChecked>
                </S.SelectedCategory>
              );
            })}
          </S.SelectedBox>
        </S.SelectContainer>
      </S.CategoryContainer>
      <S.FilterContainer>
        <S.Filter>필터 태그</S.Filter>
        <S.SearchBar>
          <S.SearchInput placeholder={'필터태그를 검색해 주세요.'} />
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchBar>
      </S.FilterContainer>
      <S.ProductNameContainer>
        <S.Product>상품명 *</S.Product>
        <S.ProductBar>
          <S.ProductSearch placeholder={'상품명을 입력해 주세요.'} />
        </S.ProductBar>
        <S.ProductCode>
          <S.Code>상품 코드</S.Code>
          <S.ShowingCode>{'[상품코드]'}</S.ShowingCode>
        </S.ProductCode>
      </S.ProductNameContainer>
      <S.ProductIntro>
        <S.Intro>상품 구성 소개 정보 *</S.Intro>
        <S.InfoInput placeholder={'상품 구성 소개 정보를 입력해 주세요.'} />
      </S.ProductIntro>
      <S.ProductThumbnail>
        <S.Thumbnail>상품 썸네일</S.Thumbnail>
        <S.AttachedButton>+ 이미지 첨부</S.AttachedButton>
        <S.FileName>
          이미지 파일명
          <S.Cancel>X</S.Cancel>
        </S.FileName>
      </S.ProductThumbnail>
      <S.ProductImg>
        <S.Img>상품 대표 이미지</S.Img>
        <S.AttachedBox>
          <S.AttachedButton>+ 이미지 첨부</S.AttachedButton>
        </S.AttachedBox>
        <S.FileList>
          <S.FileName>
            이미지 파일명
            <S.Cancel>X</S.Cancel>
          </S.FileName>
          <S.FileName>
            이미지 파일명
            <S.Cancel>X</S.Cancel>
          </S.FileName>
          <S.FileName>
            이미지 파일명
            <S.Cancel>X</S.Cancel>
          </S.FileName>
          <S.FileName>
            이미지 파일명
            <S.Cancel>X</S.Cancel>
          </S.FileName>
        </S.FileList>
      </S.ProductImg>
      <S.StockContainer>
        <S.Stock>상품 총 재고*</S.Stock>
        <S.StockNum>{'[NN개]'}</S.StockNum>
      </S.StockContainer>
    </S.Wrapper>
  );
}

export default ProdBasicInfo;

