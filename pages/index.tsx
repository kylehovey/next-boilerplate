import {
  Box,
  Center,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback } from "react";

import Item from "../components/Item";
import { useAppDispatch, useAppSelector } from "../concerns/hooks/store";
import { setName } from "../store/slices/example";

import data from "../data/data";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.example.name);

  /**
   * Note: you don't need Redux for this, it could just be a
   * useState hook. I added this here so that some example
   * Redux action could be dispatched from this component.
   */
  const handleNameChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(({ target }) => dispatch(setName(target.value)), [dispatch]);

  return (
    <>
      <Center>
        <Heading p={6}>NextJS Boilerplate</Heading>
      </Center>
      <Divider />
      <Container p={4}>
        <VStack>
          <HStack spacing={8}>
            <Box>
              <Heading as="h3">Items:</Heading>
              <UnorderedList>
                {data.map((item) => (
                  <ListItem>
                    <Item item={item} key={`item-${item.name}`} />
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input minWidth={50} value={name} onChange={handleNameChange} />
                <FormHelperText>Set your name.</FormHelperText>
              </FormControl>
            </Box>
          </HStack>
          {name !== "" ? <Heading as="h3">Hello {name}!</Heading> : null}
        </VStack>
      </Container>
    </>
  );
};

export default Home;
