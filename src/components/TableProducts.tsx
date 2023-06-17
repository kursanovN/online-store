import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { RootState } from "../store/Index";
import { productAction } from "../store/productSlice";
import { IProducts } from "../utils/constants";

export const TableProducts = () => {
  const { store } = useSelector((state: RootState) => state.store);

  const dispatch = useDispatch();

  const totalPrice = store.map((item: IProducts) => {
    console.log(item, "item");

    if (item.quantity === 0) {
      const result = { ...item, price: 0 };
      return result.price;
    } else {
      return item.price;
    }
  });

  const resultTotal = totalPrice.reduce((a: number, b: number) => a + b, 0);
  console.log(resultTotal);

  function removeItem(id: number) {
    dispatch(productAction.removeProduct(id));
  }

  function incrementHendler(id: number) {
    dispatch(productAction.incremenProduct(id));
  }

  function decrementHendler(id: number) {
    dispatch(productAction.decrementProduct(id));
  }

  return (
    <Container>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p> Product</p>
            <p> Product name </p>
            <p> Price</p>
            <p> Quantity</p>
            <p> remove</p>
          </Thead>
          <ol>
            {store.map((item: IProducts) => {
              return (
                item.quantity !== 0 && (
                  <li key={item.id}>
                    <Tbody>
                      <Timg>
                        <img src={item.url} alt="" />
                      </Timg>
                      <div>{item.productName}</div>
                      <div> $ {item.price}</div>
                      <ContainerCount>
                        <MyButton onClick={() => decrementHendler(item.id)}>
                          -
                        </MyButton>
                        <span> {item.quantity}</span>
                        <MyButton onClick={() => incrementHendler(item.id)}>
                          +
                        </MyButton>
                      </ContainerCount>
                      <button onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </Tbody>
                  </li>
                )
              );
            })}
          </ol>
        </Table>
        <div style={{ marginBottom: "40px", marginLeft: "560px" }}>
          <p style={{ fontSize: "3rem" }}>TOTAL: {resultTotal}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;

  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10;
  }
  p {
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;
const Tbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;

  .id {
    width: 100px;
    font-weight: 600;
  }
  div {
    width: 240px;
    display: flex;
    justify-content: center;
  }
`;
const ContainerCount = styled.div`
  display: flex;
  gap: 20px;
`;
const Timg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 95px;
    height: 70px;
  }
`;
const MyButton = styled.button`
  padding: 10px;
  background-color: #6e6edc;
  color: #fff;
`;
