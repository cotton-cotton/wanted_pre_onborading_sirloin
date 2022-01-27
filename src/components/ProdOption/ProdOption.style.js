import styled, { css } from 'styled-components';

const btnStyle = css`
  padding: 5px 10px;
  border: solid 1px ${({ theme }) => theme.color.darkPurple};
  border-radius: 5px;
  background-color: white;
  :hover {
    cursor: pointer;
  }
`;

export const ProOptSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ProOptContentBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProOptBar = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ProOptBtn = styled.button`
  ${btnStyle}
`;

export const ProOptContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const ProOptContentText = styled.div`
  padding-bottom: 200px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
