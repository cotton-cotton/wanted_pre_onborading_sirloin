import React from 'react';
import styled from 'styled-components';

export const ToggleBtn = () => {
  return (
    <SwitchWrapper>
      <CheckLabel>
        <InputCheck type="checkbox" />
        <Switch />
      </CheckLabel>
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  border: 1px solid red;
  padding: 15px;
`;

const CheckLabel = styled.label`
  position: relative;
  display: block;
  width: 45px;
`;

const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 15px;
  background-color: ${props => props.theme.color.gray};
  border-radius: 20px;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    top: -3px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    background-color: white;
    transition: 0.4s;
  }
`;

const InputCheck = styled.input`
  opacity: 0;
  width: 45px;
  height: 17px;

  &:checked + ${Switch} {
    background-color: ${props => props.theme.color.lightPurple};
    transition: 0.4s;

    &::before {
      background-color: #2919be;
      transform: translateX(24px);
      transition: 0.4s;
    }
  }
`;
