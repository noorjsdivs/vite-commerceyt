import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./ui/Banner";
import Products from "./ui/Products";

function App() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <main>
      <Banner />
      <Products products={products} />
    </main>
  );
}

export default App;
