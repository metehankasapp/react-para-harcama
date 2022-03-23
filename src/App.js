import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
import Basket from "./components/Basket";
import { MainContext } from "./context/context";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    const t = basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      );
    }, 0);

    setTotal(t);
    console.log(t);
  }, [basket]);

  const data = {
    money,
    setMoney,
    basket,
    setBasket,
    total,
    setTotal,
    products
  };

  return (
    <MainContext.Provider value={data}>
      <Header/>
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          total={total}
          money={money}
          setBasket={setBasket}
          product={product}
        />
      ))}
      <button onClick={resetBasket}>Sepeti Sıfırla</button>
      <Basket basket={basket} products={products} total={total} />
    </MainContext.Provider>
  );
}

export default App;
