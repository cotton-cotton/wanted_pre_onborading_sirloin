import React from 'react';
import styled from 'styled-components';
import { ToggleBtn } from './ToggleBtn';

export const ToggleSetting = ({ title, content }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <ContentBox>
        <Content>{content}</Content>
        <ToggleBtn />
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.color.borderGray};
`;

const Header = styled.h1`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  font-weight: ${props => props.theme.fontWeight.bold};
  padding: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Content = styled.h1`
  background-color: ${props => props.theme.color.backgroundGray};
`;
