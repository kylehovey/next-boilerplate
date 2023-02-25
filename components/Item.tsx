import React from "react";

import { Example } from "../data/types";

interface ItemProps {
  item: Example;
}

const Item: React.FC<ItemProps> = ({ item }) => (
  <div>
    <span>{item.name}</span>
    <span>{item.foo}</span>
  </div>
);

export default Item;
