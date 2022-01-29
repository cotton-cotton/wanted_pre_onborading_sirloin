import styled, { css } from 'styled-components';

const btnStyle = css`
  padding: 5px 10px;
  border: solid 1px ${({ theme }) => theme.color.darkPurple};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const deleteBtnStyle = css`
  ${btnStyle}
  border: solid 1px ${({ theme }) => theme.color.red};
  background-color: white;
  color: ${({ theme }) => theme.color.red};
`;

export const OptSetSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptSetBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border: solid 1px black;
`;

export const DeleteBtn = styled.button`
  ${deleteBtnStyle}
`;

export const OptSetContent = styled.div`
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-radius: 10px;
  background-color: green;
`;

export const AddImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const AddImgBtn = styled.button`
  ${btnStyle}
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const AddOptBtn = styled.button`
  ${btnStyle}
  width: 100%;
  padding: 20px;
  background-color: white;
`;
