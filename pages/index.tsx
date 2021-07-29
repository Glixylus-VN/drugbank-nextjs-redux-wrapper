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
import { useSelector, useDispatch } from "react-redux";
import { getListDrug } from "@redux/slices/drugbank/listDrugSlice";
import Link from "next/link";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const listDrug = useSelector((state) => state.drugData.data);
  useEffect(() => {
    dispatch(getListDrug());
  }, [dispatch]);
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ sm: 3, md: 5 }} spacing="15px" my={50}>
        {listDrug?.map((item, index) => (
          <Link href={`/thuoc/${item.id}`}>
            <Box borderWidth="1px" borderRadius="lg" p={3} minHeight={100}>
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

export default Home;
