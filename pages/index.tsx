import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Item from "../components/Item";

import data from "../data/data";

const Home: React.FC = () => (
  <UnorderedList>
    {data.map((item) => (
      <ListItem>
        <Item item={item} key={`item-${item.name}`} />
      </ListItem>
    ))}
  </UnorderedList>
);

export default Home;
