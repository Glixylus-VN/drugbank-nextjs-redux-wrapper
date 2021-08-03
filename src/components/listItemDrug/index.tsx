import React, { ReactElement } from "react";
import { SimpleGrid, Box, Container, Badge } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  listDrug: any;
}

export default function ListItemDrug({ listDrug }: Props): ReactElement {
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
}
