import React from 'react';
import styled from 'styled-components';

import ExpoSalesPeriodSetting from '../components/ExpoSalesPeriodSetting/ExpoSalesPeriodSetting.js';
import ProdBasicInfo from '../components/ProdBasicInfo/ProdBasicInfo';
import ProdOption from '../components/ProdOption/ProdOption.js';
import ProdDescImg from '../components/ProdDescImg/ProdDescImg.js';
import SalerRecImg from '../components/SalerRecImg/SalerRecImg.js';
import ProdInfoNotice from '../components/ProdInfoNotice/ProdInfoNotice.js';
import ProdDeliverySetting from '../components/ProdDeliverySetting/ProdDeliverySetting.js';
import ProdBenefitPerSetting from '../components/ProdBenefitPerSetting/ProdBenefitPerSetting.js';
import EtcSetting from '../components/EtcSetting/EtcSetting.js';

function Main() {
  return (
    <>
      <Wrapper>
        {/* <ExpoSalesPeriodSetting /> */}
        <ProdBasicInfo />
        {/* <ProdOption />
        <ProdDescImg />
        <SalerRecImg />
        <ProdInfoNotice />
        <ProdDeliverySetting />
        <ProdBenefitPerSetting />
        <EtcSetting /> */}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 1000px;
  padding: 20px;
`;
export default Main;
