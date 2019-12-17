import React, { useContext } from "react";
import "./index.scss";
import CategoryCard from "../CategoryCard/index";
import ProductCard from "../../Products/ProductCard/index";
import {
  CategoryContext,
  ProductCatContext,
  ProductContext
} from "../../../App";

export default function Category(props) {
  const categories = useContext(CategoryContext);
  const products = useContext(ProductContext);
  const productCats = useContext(ProductCatContext);

  const categoryObj = categories.filter(category => {
    return category.SubDir === `/category/${props.match.params.id}`;
  });

  const [thisCategory] = categoryObj;

  console.log(thisCategory);
  const categoryList = categories.map(category => {
    return category.CategoryLevel === thisCategory.CategoryLevel + 1 &&
      category.ParentCategoryID === thisCategory.CategoryID ? (
      <CategoryCard key={category.CategoryID} category={category} />
    ) : null;
  });

  /***
   *    NEED TO SIMPLIFY THIS
   *    I can probably reduce this to one function
   *    Compare ProductCats to Cats, compare Products to Product Cats, display matching products
   *    Move to Products component
   ***/
  const relevantProducts = productCats
    .filter(product => {
      return product.categoryID === thisCategory.CategoryID;
    })
    .map(product => {
      return product.ItemID;
    });

  // console.log("Relevant Products:", relevantProducts);

  const fullRelevantProducts = products.filter(product => {
    return relevantProducts.indexOf(product.ItemID) !== -1;
  });

  // console.log("Full Relevant Products:", fullRelevantProducts);

  const productList = fullRelevantProducts.map(product => {
    return <ProductCard key={product.ItemID} product={product} />;
  });

  // console.log("Product List:", productList);

  return (
    <>
      <div id="products">
        {categoryList}
        {productList}
      </div>
    </>
  );
}
