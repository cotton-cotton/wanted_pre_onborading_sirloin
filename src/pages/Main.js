import React from 'react';
import styled from 'styled-components';

// import { ExpoSalesPeriodSetting } from '../components/ExpoSalesPeriodSetting/ExpoSalesPeriodSetting.js';
// import { ProdBasicInfo } from '../components/ProdBasicInfo/ProdBasicInfo.js';
// import { ProdOption } from '../components/ProdOption/ProdOption.js';
// import { ProdDescImg } from '../components/ProdDescImg/ProdDescImg.js';
// import { SalerRecImg } from '../components/SalerRecImg/SalerRecImg.js';
// import { ProdInfoNotice } from '../components/ProdInfoNotice/ProdInfoNotice.js';
// import { ProdDeliverySetting } from '../components/ProdDeliverySetting/ProdDeliverySetting.js';
import { ImageUploadSection } from '../components/ImageUploadSection/ImageUploadSection.js';
import { ToggleSetting } from '../components/ToggleSetting/ToggleSetting.js';

function Main() {
  return (
    <Wrapper>
      {/* <ExpoSalesPeriodSetting />
      <ProdBasicInfo />
      <ProdOption />
      <ProdDescImg />
      <SalerRecImg />
      <ProdInfoNotice />
      <ProdDeliverySetting /> */}
      <ImageUploadSection title="상품 소개 이미지" />
      <ImageUploadSection title="구매자 추천 이미지" />
      <ToggleSetting title="상품 혜택 허용 설정" content="마일리지 적립" />
      <ToggleSetting title="기타 설정" content="감사카드 제공" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 1000px;
  padding: 20px;
  border: 1px solid red;
`;
export default Main;
