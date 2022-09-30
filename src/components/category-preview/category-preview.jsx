import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {CategoryPreviewContainer,Title,Preview } from './category-preview.styles.scss'

const CategoryPreview = ({title, products}) =>{
  return (
      <CategoryPreviewContainer>
          <h2>
              <Title to={title}>
                  {title.toUpperCase()}
              </Title>
          </h2>
          <div>
              {products
                  .filter((_, idx) => idx < 4)
                  .map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
          </div>
      </CategoryPreviewContainer>
  );

}

export default CategoryPreview;