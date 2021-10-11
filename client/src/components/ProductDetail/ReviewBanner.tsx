import React from "react";
import styled from "styled-components";
import { IReview } from 'interfaces/IReview';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

interface IReviewBanner {
  reviewData: IReview[];
  userRate: number;
  percentage: number;
}
const S = {
  Review: styled.div`
    margin: 20px 0;
    height: 70px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    cursor: default;
    ul{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #505050;
      font-size: 14px;
      li{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .cont{
        flex-basis: 25%;
        border-right: 1px solid #e0e0e0;
        text-align: center;
        font-weight: 600;
        p{
          display: block;
        }
      }
      .star{
        flex-basis: 40%;
        border-right: 1px solid #e0e0e0;
      }
      .desc{
        text-align: center;
        flex-basis: 35%;
      }
    }
    ${({ theme }) => theme.mobile`
      padding: 10px 5px;
      ul{
        font-size: 14px;
        .desc{
          font-size: 10px;
        }
      }
    }`}
  `,
}

const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 30px;
    color: #000;
    ${({ theme }) => theme.mobile`
      font-size: 14px;
      .rc-rate-star{
        margin-right: 3px;
      }
    }`}
  }
`
export default function ReviewBanner({ reviewData, userRate, percentage }: IReviewBanner) {

  return (
    <S.Review>
      <ul>
        <li className='cont'>
          <div>
            <span style={{ fontSize: '16px' }}>{reviewData && reviewData.length}</span>
            <p>review</p>
          </div>
        </li>
        <li className='star'>
          <StyledRate
            defaultValue={userRate}
            disabled={true}
          />
        </li>
        <li className='desc'>
          {percentage ? (
            <p>
              구매자의 약 {percentage}%가<br />
              이제품을 추천합니다.
            </p>
          ) : (
            <p>
              아직 리뷰가 없습니다
            </p>
          )}
        </li>
      </ul>
    </S.Review>
  );
}
