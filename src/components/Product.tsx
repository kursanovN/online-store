import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { RootState } from "../store/Index";
import { productAction } from "../store/productSlice";

export const Product = () => {
  const { store } = useSelector((state: RootState) => state.store);
  console.log(store, "store");

  const dispatch = useDispatch();

  function addProductHandler(id: number) {
    dispatch(productAction.addProduct(id));
  }

  return (
    <div>
      <Ul>
        {store.map((item) => (
          <Li key={item.id}>
            <div>
              <img src={item.url} alt="" />
            </div>
            <div>
              <ProductText>
                {item.productName} - $ {item.staticPrice}
              </ProductText>
              <Button
                disabled={item.quantity > 0}
                onClick={() => addProductHandler(item.id)}>
                Add
              </Button>
            </div>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

const Li = styled.li`
  width: 300px;
  height: 400px;
  background-color: #e76c6c;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 1px 8px rgba(#fff);
  img {
    width: 200px;
    border-radius: 20px;
  }
`;
const Ul = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  background-color: green;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 20px;
  :disabled {
    background-color: #6cd16c;
  }
`;
const ProductText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;
