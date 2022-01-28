import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { parseISO } from 'date-fns';
import styled from 'styled-components';
import { ToggleBtn } from '../ToggleSwitch/ToggleBtn';

function ProdDeliverySetting() {
  const [isDeliveryStartDateToggleOn, setIsDeliveryStartDateToggleOn] =
    useState(false);
  const [isPickupToggleOn, setIsPickupToggleOn] = useState(false);
  const [isReserveToggleOn, setIsReserveToggleOn] = useState(false);
  const [reserveStartTime, setReserveStartTime] = useState(
    useState(parseISO('YYYY.MM.DD HH:MM'))
  );
  const [reserveEndTime, setReserveEndTime] = useState(
    parseISO('YYYY.MM.DD HH:MM')
  );
  const [dawnDeliveryDate, setDawnDeliveryDate] = useState(
    parseISO('YYYY.MM.DD')
  );
  const [normalDeliveryDate, setNormalDeliveryDate] = useState(
    parseISO('YYYY.MM.DD')
  );

  const handleDeliveryStartDateToggle = isActive => {
    setIsDeliveryStartDateToggleOn(isActive);
    setIsReserveToggleOn(false);
  };

  const handlePickupToggle = isActive => {
    setIsPickupToggleOn(isActive);
    setIsReserveToggleOn(false);
  };

  const handleReserveToggle = isActive => {
    setIsReserveToggleOn(isActive);
    setIsDeliveryStartDateToggleOn(false);
    setIsPickupToggleOn(false);
  };

  return (
    <Container>
      <Title>상품 배송 설정</Title>
      <DeliveryStartDateWrapper>
        <SubTitle>사용자 배송일 출발일 지정</SubTitle>
        <ContentWrapper>
          <ToggleBtn
            value={isDeliveryStartDateToggleOn}
            checked={isDeliveryStartDateToggleOn === true}
            onChange={handleDeliveryStartDateToggle}
          />
        </ContentWrapper>
      </DeliveryStartDateWrapper>
      <PickupWrapper>
        <SubTitle>방문 수령</SubTitle>
        <ContentWrapper>
          <ToggleBtn
            value={isPickupToggleOn}
            checked={isPickupToggleOn === true}
            onChange={handlePickupToggle}
          />
        </ContentWrapper>
      </PickupWrapper>
      <ReserveDelivWrapper>
        <SubTitle>
          선 주문
          <br />
          예약 배송
        </SubTitle>
        <ContentWrapper>
          <ToggleBtn
            value={isReserveToggleOn}
            checked={isReserveToggleOn === true}
            onChange={handleReserveToggle}
          />
          <OrderTimeWrapper>
            <Text>주문 시간</Text>
            <DateRangePicker>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={reserveStartTime}
                  onChange={newValue => {
                    setReserveStartTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  disablePast={true}
                />
                <TilderWrapper>~</TilderWrapper>
                <DateTimePicker
                  renderInput={props => <TextField {...props} />}
                  value={reserveEndTime}
                  onChange={newValue => {
                    setReserveStartTime(newValue);
                  }}
                  ampm={false}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__ __:__"
                  minDateTime={reserveStartTime}
                />
              </LocalizationProvider>
            </DateRangePicker>
          </OrderTimeWrapper>
          <DeliveryDateWrapper>
            <DawnDeliveryWrapper>
              <Text>새벽 배송</Text>
              <DateRangePicker>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="yyyy.MM.dd"
                    mask="____.__.__"
                    value={dawnDeliveryDate}
                    onChange={newValue => {
                      setDawnDeliveryDate(newValue);
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </DateRangePicker>
            </DawnDeliveryWrapper>
            <NormalDeliveryWrapper>
              <Text>일반 배송</Text>
              <DateRangePicker>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="yyyy.MM.dd"
                    mask="____.__.__"
                    value={normalDeliveryDate}
                    onChange={newValue => {
                      setNormalDeliveryDate(newValue);
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </DateRangePicker>
            </NormalDeliveryWrapper>
          </DeliveryDateWrapper>
        </ContentWrapper>
      </ReserveDelivWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  margin-bottom: 40px;
`;

const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const DeliveryStartDateWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

const SubTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  width: 150px;
  background: ${({ theme }) => theme.color.backgroundLightGray};
  line-height: 22px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const PickupWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

const ReserveDelivWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

const OrderTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: -10px;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.gray};
  margin-right: 20px;
`;

const DeliveryDateWrapper = styled.div`
  padding: 20px;
  display: flex;
`;

const DawnDeliveryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-top: -20px;
`;

const NormalDeliveryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-top: -20px;
`;

const TilderWrapper = styled.div`
  margin: 0 10px;
`;

const DateRangePicker = styled.div`
  display: flex;
  align-items: center;
`;
export default ProdDeliverySetting;
