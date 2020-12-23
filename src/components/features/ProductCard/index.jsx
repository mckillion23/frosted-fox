import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ data }) => (
  <div className="product-card mt-12 pb-8 bg-gray-100 rounded-lg mx-auto px-8 pt-8 mt-12">
    <h1 className="ml-auto text-xs font-helvetica font-extrabold text-brand text-xl mb-4">
      {data.title}
    </h1>
    <img width="300" height="300" src={data.imageUrl} alt="Not Found" className="mb-4" />
    {data.text}
  </div>
);

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    text: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  data: {
    title: 'Title Not Found',
    imageUrl: 'Image Not Found',
    text: 'Text Not Found',
  },
};

export default ProductCard;
