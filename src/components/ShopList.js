import { useEffect, useState } from "react";

// Gesamtübersicht für die ShopProdukte
const ShopList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return <section></section>;
};

export default ShopList;
