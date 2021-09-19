import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { IProduct } from 'interfaces/IProduct';
import { Get } from "api";

export default function ProductType(props) {
  console.log('ProductType: ', props);
  const router: NextRouter = useRouter();
  const { category } = router.query as { category: string };
  const { data, isLoading, isSuccess, isError, status, error, refetch } = useQuery<IProduct, Error>(['product', category], async () => await Get.products(category), {
    retry: 0,
  });

  console.log('error: ', error);
  // const result = useQuery<IProduct>(['product', category], async () => await Get.products(category),{
  //   retry: 0,
  // });
  // console.log('result: ', result);

  if (error instanceof Error) {
    console.log('response', error.response);
  }

  // const [item, setItem] = useState<IProduct[] | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get(URL);
  //       setItem(result.data);
  //       console.log('result: ', result);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   }
  //   fetchData()
  // }, [])
  if (isError) {
    return <h1>error..</h1>
  }

  if (isLoading) {
    return <Loading isLoading={isLoading} text='loading' />
  }



  return (
    <>
      <Head>
        {/* <title>쥬얼리 | ?</title> */}
        <meta name="description" content="??" />
      </Head>
      <MainContainer >
        <Product item={data} />
      </MainContainer>
    </>
  );
}


