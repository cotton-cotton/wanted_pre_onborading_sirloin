import React from 'react';
import styled from 'styled-components';

function ProdBasicInfo() {
  return (
    <Wrapper>
      <Title>상품 기본 정보</Title>
      <CategoryContainer>
        <Category>카테고리 *</Category>
        <SelectContainer>
          <CheckBox></CheckBox>
          <SelectedBox></SelectedBox>
        </SelectContainer>
      </CategoryContainer>
      <FilterContainer>
        <Filter>필터 태그</Filter>
        <SearchBar>
          <SearchInput placeholder={'필터태그를 검색해 주세요.'} />
          <SearchButton>검색</SearchButton>
        </SearchBar>
      </FilterContainer>
      <ProductNameContainer>
        <Product>상품명 *</Product>
        <ProductBar>
          <ProductSearch placeholder={'상품명을 입력해 주세요.'} />
        </ProductBar>
        <ProductCode>
          <Code>상품 코드</Code>
          <ShowingCode>{'[상품코드]'}</ShowingCode>
        </ProductCode>
      </ProductNameContainer>
      <ProductIntro>
        <Intro>상품 구성 소개 정보 *</Intro>
        <InfoInput placeholder={'상품 구성 소개 정보를 입력해 주세요.'} />
      </ProductIntro>
      <ProductThumbnail>
        <Thumbnail>상품 썸네일</Thumbnail>
        <AttachedButton>+ 이미지 첨부</AttachedButton>
        <FileName>
          이미지 파일명
          <Cancel>X</Cancel>
        </FileName>
      </ProductThumbnail>
      <ProductImg>
        <Img>상품 대표 이미지</Img>
        <AttachedBox>
          <AttachedButton>+ 이미지 첨부</AttachedButton>
        </AttachedBox>
        <FileList>
          <FileName>
            이미지 파일명
            <Cancel>X</Cancel>
          </FileName>
          <FileName>
            이미지 파일명
            <Cancel>X</Cancel>
          </FileName>
          <FileName>
            이미지 파일명
            <Cancel>X</Cancel>
          </FileName>
          <FileName>
            이미지 파일명
            <Cancel>X</Cancel>
          </FileName>
        </FileList>
      </ProductImg>
      <StockContainer>
        <Stock>상품 총 재고*</Stock>
        <StockNum>{'[NN개]'}</StockNum>
      </StockContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  border: 2px solid gray;
`;
const Title = styled.div`
  height: 5.5%;
  padding: 20px;
`;
const CategoryContainer = styled.div`
  display: flex;
  height: 32%;
`;
const Category = styled.div`
  width: 16%;
  height: 100%;
  padding: 20px;
  border-right: 1px solid gray;
`;
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 83%;
`;
const CheckBox = styled.div`
  width: 60%;
  height: 90%;
  border: 1px solid gray;
  border-radius: 10px;
`;
const SelectedBox = styled.div`
  width: 33%;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const Filter = styled.div`
  display: flex;
  width: 16%;
  height: 100%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const SearchBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 79%;
  height: 75%;
  margin-left: 18px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const SearchInput = styled.input`
  width: 85%;
  height: 90%;
  border-radius: 10px;
`;
const SearchButton = styled.button`
  width: 13%;
  height: 80%;
  background: none;
  border: 1px solid blue;
  border-radius: 10px;
`;
const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid black;
`;
const Product = styled.div`
  display: flex;
  width: 16.1%;
  height: 100%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const ProductBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;
const ProductSearch = styled.input`
  width: 92%;
  height: 75%;
  border: 1px solid gray;
  border-radius: 10px;
  padding-left: 7px;
`;
const ProductCode = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
`;
const Code = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 35%;
  height: 100%;
  border-right: 1px solid gray;
`;
const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const ProductIntro = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid black;
`;
const Intro = styled.div`
  display: flex;
  width: 16%;
  height: 100%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const InfoInput = styled.input`
  width: 79%;
  height: 75%;
  margin-left: 15px;
  padding-left: 7px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const ProductThumbnail = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  border-bottom: 1px solid black;
`;
const Thumbnail = styled.div`
  display: flex;
  width: 16%;
  height: 100%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const AttachedButton = styled.button`
  width: 280px;
  height: 60px;
  margin-left: 15px;
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
const FileName = styled.div`
  margin: 10px 0 10px 15px;
`;
const Cancel = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  background: none;
  border: 1px solid gray;
`;
const ProductImg = styled.div`
  display: flex;
  align-items: center;
  height: 25%;
  border-bottom: 1px solid black;
`;
const Img = styled.div`
  display: flex;
  width: 16%;
  height: 100%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const AttachedBox = styled.div`
  width: 30%;
  height: 90%;
`;
const FileList = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-left: -5px;
`;
const StockContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6.5%;
`;
const Stock = styled.div`
  display: flex;
  width: 16%;
  height: 100%;
  padding-left: 20px;
  align-items: center;
  border-right: 1px solid gray;
`;
const StockNum = styled.div`
  margin-left: 20px;
`;
export default ProdBasicInfo;
