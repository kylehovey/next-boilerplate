import React from "react";
import Item from "../components/Item";

import data from "../data/data";

const Home: React.FC = () => (
  <ul>
    {data.map((item) => (
      <li>
        <Item item={item} key={`item-${item.name}`} />
      </li>
    ))}
  </ul>
);

export default Home;
