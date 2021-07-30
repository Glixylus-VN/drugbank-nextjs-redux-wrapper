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

interface Props {
  listDrug: any;
}
const Home: React.FC<Props> = ({ listDrug }) => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ sm: 3, md: 5 }} spacing="15px" my={50}>
        {listDrug.map((item, index) => (
          <Link href={`/thuoc/${item.id}`} passHref key={index}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={3}
              minHeight={100}
              key={index}
              style={{ cursor: "pointer" }}
            >
              <Box pb={1}>
                <Badge borderRadius="lg" px="2" colorScheme="teal">
                  {item.id}
                </Badge>
              </Box>
              {item.tenThuoc}&nbsp;
              <Box as="span" color="gray.500" fontSize="sm">
                / {item.baoChe}
              </Box>
              <Box fontSize="sm">{item.dongGoi}</Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(getListDrug());
      // console.log("State on server", store.getState());
      return {
        props: {
          listDrug: store.getState().drugData.data,
        },
      };
    }
);

export default Home;
