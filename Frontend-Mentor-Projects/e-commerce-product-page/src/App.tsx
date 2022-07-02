import { useState } from "react";
import { useQuery } from "react-query";
// Components

// Styles

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  return <div className="App">Hello</div>;
};

export default App;
