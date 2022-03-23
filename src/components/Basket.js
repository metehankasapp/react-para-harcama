import { MainContext, useContext } from "../context/context";
const Basket = () => {
  const { basket, products, total } = useContext(MainContext);
  return (
    <div>
      {basket.map((item) => (
        <div>
          {products.find((p) => p.id === item.id).title} * {item.amount}{" "}
        </div>
      ))}
      <br />
      <p>${total}</p>
    </div>
  );
};

export default Basket;
