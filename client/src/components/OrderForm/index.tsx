import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { useOrderContext } from 'context/OrderProvider';
import FinalAmount from 'components/Forms/FinalAmount';
import FormBox from 'components/Forms/FormFieldset';
import DeliveryInfo from 'components/Forms/DeliveryInfo';
import OrderList from 'components/Forms/OrderList';
import UserInfo from 'components/Forms/UserInfo';
import Payment from 'components/Forms/Payment';
import PointsInfo from 'components/Forms/PointsInfo';
import { useAppContext } from 'context/AppProvider';
interface IOrderForm {

}

const S = {
  OrderForm: styled.div`
  `,
}

export default function OrderForm({ }: IOrderForm) {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [paymentPrice, setPaymentPrice] = useState<number | null>(null);
  const App = useAppContext();
  const Order = useOrderContext();
  const router = useRouter();
  const { userId } = App.state.userInfo;

  const handleRouterBack = useCallback(() => {
    Order.action.setInitOrderForm();
    router.back();
  }, []);

  useEffect(() => {
    if (Order.state.orderForm.Products.length) {
      Order.action.setAmountInfo();
    }
  }, [Order.state.orderForm.Products]);


  return (
    <S.OrderForm>
      <UserInfo />
      <FormBox title='주문내역'>
        <OrderList
          item={Order.state.orderForm.Products}
          handleRouterBack={handleRouterBack}
          handleCheckbox={(e) => Order.action.setCheckBox(e, userId)}
          handleSelectProductRemove={(e) => Order.action.setRemoveOrderItems(e, userId)}
        />
      </FormBox>

      {Order.state.orderForm.Products.length > 0 && (
        <>
          <FormBox title='결제예정금액'>
            <FinalAmount
              totalPrice={Order.state.orderForm.amountInfo.productAmount}
              paymentPrice={Order.state.orderForm.amountInfo.consumerAmount}
            />
            {userId && <PointsInfo />}
          </FormBox>

          <FormBox title='배송정보'>
            <DeliveryInfo />
          </FormBox>

          <FormBox title='결제'>
            <Payment />
          </FormBox>
        </>
      )}
    </S.OrderForm>
  );
}