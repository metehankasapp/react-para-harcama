import { useContext, useEffect } from "react/cjs/react.development";
import { MainContext } from "../context/context";

const Product = ({ product }) => {
  const { basket, setBasket, money, total } = useContext(MainContext);
  const basketItem = basket.find((item) => item.id === product.id);


  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount -= 1;
      if (checkBasket.amount === 0) {
        setBasket([...basket.filter((item) => item.id !== product.id)]);
      } else {
        setBasket([
          ...basket.filter((item) => item.id !== product.id),
          checkBasket,
        ]);
      }
    }
  };

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);


    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };


  

  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <p class="price"> ${product.price}</p>
        <div className="action">
          <button disabled={!basketItem} onClick={removeBasket}>
            Çıkart
          </button>
          <span class="amount">{(basketItem && basketItem.amount) || 0}</span>
          <button
            disabled={product.price > money || money - total <= 0}
            onClick={addBasket}
          >
            Ekle
          </button>
        </div>
        <style jsx>
          {`
            .product {
              padding: 10px;
              background: #fff;
              border: 1px solid #ddd;
              margin-bottom: 20px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Product;
