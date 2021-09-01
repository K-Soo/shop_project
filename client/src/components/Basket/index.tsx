import React from "react";
import styled from "styled-components";
import NonLogin from 'components/Basket/NonLogin';
import Title from 'components/style/Title';
import BasketList from 'components/Basket/BasketList';
import FinalAmount from 'components/Forms/FinalAmount';
import FormBox from 'components/Forms/FormBox';
import DeliveryInfo from 'components/Forms/DeliveryInfo';
import OrderList from 'components/Forms/OrderList';
import UserInfo from 'components/Forms/UserInfo';
import PageTitle from 'components/Common/PageTitle';
interface IBasket {

}

const S = {
  Basket: styled.div`
  `,
}

export default function Basket({ }: IBasket) {
  return (
    <S.Basket>
      <PageTitle TitleText='장바구니'/>
      <UserInfo />
      <FormBox title='장바구니 목록'>
        <OrderList caption='장바구니 목록' />
      </FormBox>
      <FormBox title='결제예정금액'>
        <FinalAmount />
      </FormBox>
    </S.Basket>
  );
}
