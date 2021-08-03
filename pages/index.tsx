import React, { useEffect } from "react";
import {
  Spacer,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Box,
  Image,
  list,
  Container,
  Badge,
} from "@chakra-ui/react";
import { getListDrug } from "@redux/slices/drugbank/listDrugSlice";
import Link from "next/link";
import withRedux from "next-redux-wrapper";
import { wrapper } from "@redux/store";
import axios from "axios";
import ListItemDrug from "@components/listItemDrug";
interface Props {
  listDrug: any;
}
const Home: React.FC<Props> = ({ listDrug }) => {
  return <ListItemDrug listDrug={listDrug} />;
};

export async function getServerSideProps() {
  const res = await axios.get(
    "https://drugbank.vn/services/drugbank/api/public/thuoc",
    {
      params: {
        size: 25,
      },
    }
  );
  return {
    props: {
      listDrug: res.data,
    },
  };
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       await store.dispatch(getListDrug());
//       console.log("State on server", store.getState());
//       return {
//         props: {
//           listDrug: store.getState().drugData.data,
//         },
//       };
//     }
// );

export default Home;
