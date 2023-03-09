import React, { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select ,Grid} from "./Styled";

export const Products = () => {
  const dispatch = useDispatch()
  const data = useSelector((store) => store.data)
  
  useEffect(() => {
    
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    dispatch(sortProducts(e.target.value))
  };
  return (
    <div className="center">
      <h2 className="center">Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc" onChange={handleSort}>Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((e) => {
          return <ProductCard item={e} key={ e.id}/>
        })}
      </Grid>
    </div>
  );
};
