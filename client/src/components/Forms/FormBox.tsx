import React, { useState } from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import Icon from 'components/Icon/Icon';
interface IFormBox {
  children: React.ReactNode
  title: string;
  margin?: string;
}

const S = {
  FormBox: styled.div<{ margin: string }>`
    /* margin-top: 30px; */
    ${({ theme }) => theme.mobile`
      padding: 0 10px;
      border: solid #e8e8e8;
      border-width: 1px 0 1px 0;
      margin-top: 10px;
    `}
  `,
  SubTitle: styled.div<{ disable: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    height: 35px;
    width: 100%;
    ${Title}{
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: #333;
      }
    }
    .arrow-icon{
      display: none;
      transform: ${props => props.disable ? 'rotate()' : 'rotate(180deg)'};
      font-size: 0;
      svg{
        height: 16px;
        width: 16px;
      }
    }
    ${({ theme }) => theme.mobile`
      align-items: center;
      border-bottom: none;
      margin-bottom: 0px;
      ${Title}{
        font-size: 16px;
        &::after{
          content: none;
        }
      }
      .arrow-icon{
        display: block;
      }
    `}
  `,
  Content: styled.div<{ disable: boolean }>`
    padding-bottom: 20px;
    ${({ theme }) => theme.mobile`
      display: none;
      display: ${({ disable }: any) => disable ? 'block' : 'none'};
    `}
  `,
}

export default function FormBox({ children, title, margin }: IFormBox) {
  const [disable, setDisable] = useState(false);
  console.log('disable: ', disable);

  return (
    <S.FormBox margin={margin}>
      <S.SubTitle disable={disable}>
        <Title level={3} size='24' textAlign='left'>{title}</Title>
        <i onClick={() => setDisable(!disable)} className='arrow-icon'><Icon style={{ color: '#333' }} name='arrowNoTailBottom' /></i>
      </S.SubTitle>
      <S.Content disable={disable} >
        {children}
      </S.Content>
    </S.FormBox>
  );
}
