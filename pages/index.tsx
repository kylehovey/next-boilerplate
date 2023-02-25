import {
  Center,
  Container,
  Divider,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Item from "../components/Item";

import data from "../data/data";

const Home: React.FC = () => (
  <>
    <Center>
      <Heading p={6}>NextJS Boilerplate</Heading>
    </Center>
    <Divider />
    <Container p={4}>
      <Heading as="h2">Items:</Heading>
      <VStack spacing={4}>
        <UnorderedList>
          {data.map((item) => (
            <ListItem>
              <Item item={item} key={`item-${item.name}`} />
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </Container>
  </>
);

export default Home;
