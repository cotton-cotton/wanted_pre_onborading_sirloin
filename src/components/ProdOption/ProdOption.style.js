import styled, { css } from 'styled-components';

const btnStyle = css`
  padding: 5px 10px;
  border: solid 1px ${({ theme }) => theme.color.darkPurple};
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ProOptSection = styled.div`
  margin-bottom: 40px;
`;

export const ProOptContentBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
`;

export const ProOptBar = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ProOptBtn = styled.button`
  ${btnStyle}
  background-color: white;
`;

export const ProOptContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const DefaultOptSet = styled.div`
  min-height: 644.549px;
  padding-top: 100px;
`;
