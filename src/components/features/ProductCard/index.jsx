import React from 'react';

const ProductCard = (props) => (
  <div className="product-card mt-12 pb-8 bg-gray-100 rounded-lg mx-auto px-8 pt-8 mt-12">
    <h1 className="ml-auto text-xs font-helvetica font-extrabold text-brand text-xl mb-4">
      {props.data.title}
    </h1>
    <img width="300" height="300" src={props.data.imageUrl} alt={props.data.id} className="mb-4" />
    {props.data.text}
  </div>
);

export default ProductCard;
