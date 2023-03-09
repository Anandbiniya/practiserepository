import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <div>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <div>{item.title}</div>
        <img src={item.image} alt="" />
        <div>{item.brand}</div>
        <div>Price-:{item.price}</div>
      </Flex>
    </div>
  );
};

// {
//   "id": 2,
//   "brand": "Blackberry's",
//   "title": "Regukar Fit Printed Shirt",
//   "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10944602/2020/3/5/da4c1a83-987b-4afa-baad-f72039dbdedb1583385686526-Roadster-Men-Teal-Blue--Black-Regular-Fit-Printed-Casual-Shi-4.jpg",
//   "category": "men",
//   "price": 699
// },