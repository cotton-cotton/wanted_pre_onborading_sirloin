import React, { useState } from 'react';
import * as S from '../ProdBasicInfo/ProdBasicInfo.Style';

function ProdBasicInfo() {
  const CATEGORY_LIST = [
    { id: 0, data: '구이용' },
    { id: 1, data: '안심' },
    { id: 2, data: '등심' },
    { id: 3, data: '채끝' },
    { id: 4, data: '특수' },
    { id: 5, data: '양념' },
    { id: 6, data: 'Bone' },
    { id: 7, data: '선물제안' },
    { id: 8, data: '이벤트' },
    { id: 9, data: '요리용' },
    { id: 10, data: '무료배송' },
    { id: 11, data: '세트' },
  ];
  const [checkedList, setCheckedList] = useState([]);
  const [selectedDropValue, setSelectedDropValue] =
    useState('상품을 선택하세요.');

  const PRODUCT_DATA = [
    { id: null, value: '상품을 선택하세요.' },
    { id: '0001', value: '알꼬리 300g' },
    { id: '0002', value: '미니샤토 150g' },
    { id: '0003', value: '안심추리 150g' },
    { id: '0004', value: '안심슬라이스 150g' },
    { id: '0005', value: '립아이' },
    { id: '0006', value: '로스 등심 200g' },
    { id: '0007', value: '꽃등심 200g' },
    { id: '0008', value: '채끝 등심 200g' },
  ];

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
  const handleDropProduct = e => {
    const { value } = e.target;
    setSelectedDropValue(PRODUCT_DATA.filter(el => el.value === value)[0].id);
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
          <S.ProductSearch onChange={handleDropProduct}>
            {PRODUCT_DATA.map(el => {
              return (
                <option defaultValue={'123'} key={el.id}>
                  {el.value}
                </option>
              );
            })}
          </S.ProductSearch>
        </S.ProductBar>
        <S.ProductCode>
          <S.Code>상품 코드</S.Code>
          <S.ShowingCode>{selectedDropValue}</S.ShowingCode>
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
