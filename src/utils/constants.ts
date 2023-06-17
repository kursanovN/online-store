export interface IProducts {
  id: number;
  url: string;
  productName: string;
  price: number;
  quantity: number;
  staticPrice: number;
}

export const productData: IProducts[] = [
  {
    id: 1,
    url: "https://eco-ferma24.ru/wp-content/uploads/2020/06/k1.jpeg",
    productName: "Клубника",
    price: 200,
    quantity: 0,
    staticPrice: 200,
  },
  {
    id: 2,
    url: "https://www.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg",
    productName: "Алма",
    price: 60,
    quantity: 0,
    staticPrice: 60,
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/507567362/photo/collection-of-whole-and-cut-oranges-isolated-on-white.jpg?s=612x612&w=0&k=20&c=of9gibN6OV1nbBlT3lWT2ACwwDxO78Op9UC4bfSVoJY=",
    productName: "Orange",
    price: 80,
    quantity: 0,
    staticPrice: 80,
  },
];
