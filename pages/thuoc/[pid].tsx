import React, { ReactElement, useEffect } from "react";
import { getDetailDrug } from "../../src/redux/slices/drugbank/listDrugSlice";
import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

export type drug = {
  id: string;
  tenThuoc: string;
  hoatChat: string;
  congTyDk: string;
};
interface Props {
  pid: string;
  detailData: drug;
}

export default function Thuoc({ pid, detailData }: Props): ReactElement {
  return <div>{detailData?.congTyDk}</div>;
}

export async function getServerSideProps(context) {
  console.log(context);
  const { pid } = context.query;
  const res = await axios.get(
    `https://drugbank.vn/services/drugbank/api/public/thuoc/${pid}`,
    {
      params: {
        size: 25,
      },
    }
  );
  return {
    props: {
      pid,
      detailData: res.data,
    }, // will be passed to the page component as props
  };
}
