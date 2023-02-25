import { HStack, Text } from "@chakra-ui/react";
import React from "react";

import { Example } from "../data/types";

interface ItemProps {
  item: Example;
}

const Item: React.FC<ItemProps> = ({ item }) => (
  <HStack>
    <Text>
      <Text as="span" fontWeight="bold">
        {item.name}
      </Text>
      : {item.foo}
    </Text>
  </HStack>
);

export default Item;
