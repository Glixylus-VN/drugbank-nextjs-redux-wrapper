import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { getDetailDrug } from "../../src/redux/slices/drugbank/listDrugSlice";
import { GetStaticProps, GetStaticPropsContext } from "next";
import withRedux from "next-redux-wrapper";
import { wrapper } from "@redux/store";
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

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       const { pid } = params;

//       await store.dispatch(getDetailDrug(pid as string));
//       // console.log("State on server", store.getState());
//       return {
//         props: {
//           pid,
//           detailData: store.getState().drugData.detailDrug,
//         },
//       };
//     }
// );

// export async function getServerSideProps(context) {
//   console.log(context);
//   const { pid } = context.query;
//   return {
//     props: {
//       pid,
//     }, // will be passed to the page component as props
//   };
// }

interface itemIntf {
  id: string;
}

async function getDrugPids() {
  const res = await axios.get(
    "https://drugbank.vn/services/drugbank/api/public/thuoc",
    {
      params: {
        size: 25,
      },
    }
  );
  const data = res.data;
  return data.map((item: itemIntf) => ({
    params: {
      pid: item.id,
    },
  }));
}

export const getStaticPaths = async () => {
  const paths = await getDrugPids();
  return {
    paths: [] && paths,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { pid } = params;

      await store.dispatch(getDetailDrug(params?.pid as string));
      // console.log("State on server", store.getState());
      return {
        props: {
          pid,
          detailData: store.getState().drugData.detailDrug,
        },
      };
    }
);

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps(ctx: GetStaticPropsContext) {
//   const { pid } = ctx.params;
//   console.log(ctx);
//   try {
//     return {
//       props: {
//         pid,
//       },
//       revalidate: 1,
//     };
//   } catch (error) {
//     return {
//       props: {
//         pid,
//       },
//       revalidate: 1,
//     };
//   }
// }
