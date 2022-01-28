// 상품옵션(prod-option)  - 10 11 12 (이미지 추가 및 삭제 + 항목 추가 및 삭제)
import React, { useState } from 'react';
import * as S from './ProdOption.style';
import OptSet from './props/OptSet';

function ProdOption() {
  const DATA = [<OptSet />];
  const copy = [...DATA];

  const [optionSetList, setOptionSetList] = useState([]);
  const [value, setValue] = useState('');
  const commentValue = e => {
    setValue(e.target.value);
  };
  const addComments = () => {
    /* openList.appendChild(() => setOptionList()); */
    DATA.push(value);
  };

  const openList = () => {
    setOptionSetList(DATA);
    commentValue();
  };

  // const [isInput, setIsInput] = useState(false);
  // const openInputId = () => {
  //   setIsInput(true);
  // };

  const optSetDeleteBtn = id => {
    setOptionSetList(optionSetList.filter(item => item.id !== id));
  };
  console.log(optSetDeleteBtn);
  return (
    <S.ProOptSection>
      <S.ProOptContentBar>
        <S.ProOptBar>상품 옵션 *</S.ProOptBar>
        <S.ProOptBtn onClick={openList}>+ 옵션 세트 추가</S.ProOptBtn>
      </S.ProOptContentBar>
      <S.ProOptContent>
        {/* 옵션세트를 추가하여 옵션을 구성해 주세요. */}

        {optionSetList.map(key => {
          return (
            <>
              <OptSet key={key} optSetDeleteBtn={optSetDeleteBtn} />
              {addComments}
            </>
          );
        })}
        {console.log('openList', openList)}

        {/* {isInput ? (
          <OptSet activeDeleteBtn={activeDeleteBtn} />
        ) : (
          <S.ProOptContentText>
            옵션세트를 추가하여 옵션을 구성해 주세요.
          </S.ProOptContentText>
        )} */}
      </S.ProOptContent>
    </S.ProOptSection>
  );
}

export default ProdOption;
