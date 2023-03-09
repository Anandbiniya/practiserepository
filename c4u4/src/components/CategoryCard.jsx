import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Select ,Grid} from "./Styled";

export const CategoryCard = () => {
  const {root}=useParams()
  console.log('root:', root)
  const dispatch = useDispatch()
  const data = useSelector((store) => store.data)

  let cd = data.filter((e) => {
         return e.category==root
       })
       console.log('roddot:', cd)
  useEffect(() => {
    // dispatch filter Products for every ID change
  }, []);
  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
      {cd.map((e) => {
          return <ProductCard item={e} key={ e.id}/>
        })}
    </Grid>
  );
};
