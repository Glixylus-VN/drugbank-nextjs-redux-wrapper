import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { getDetailDrug } from "../../src/redux/slices/drugbank/listDrugSlice";
import { GetStaticProps, GetStaticPropsContext } from "next";
interface Props {
  pid: string;
}

export default function Thuoc({ pid }: Props): ReactElement {
  return <div>{pid}</div>;
}

// export async function getServerSideProps(context) {
//   console.log(context);
//   const { pid } = context.query;
//   return {
//     props: {
//       pid,
//     }, // will be passed to the page component as props
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { pid } = ctx.params;
  console.log(ctx);
  try {
    return {
      props: {
        pid,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        pid,
      },
      revalidate: 1,
    };
  }
}
