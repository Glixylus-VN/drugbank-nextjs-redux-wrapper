import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { getDetailDrug } from "../../src/redux/slices/drugbank/listDrugSlice";
import { GetStaticProps, GetStaticPropsContext } from "next";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../../src/redux/store";
interface Props {
  pid: string;
  detailData: any;
}

export default function Thuoc({ pid, detailData }: Props): ReactElement {
  return <div>{detailData.tenThuoc}</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { pid } = params;

      await store.dispatch(getDetailDrug(pid as string));

      console.log("State on server", store.getState());

      return {
        props: {
          pid,
          detailData: store.getState().drugData.detailDrug,
        },
      };
    }
);

// export async function getServerSideProps(context) {
//   console.log(context);
//   const { pid } = context.query;
//   return {
//     props: {
//       pid,
//     }, // will be passed to the page component as props
//   };
// }

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
