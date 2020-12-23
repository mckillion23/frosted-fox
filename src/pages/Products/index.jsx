import React from 'react';
import Prismic from 'prismic-javascript';
import ProductCard from '../../components/features/ProductCard';

const apiEndpoint = 'https://frosted-fox.cdn.prismic.io/api/v2';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDataItems: [],
    };
  }

  async componentDidMount() {
    const api = await Prismic.getApi(apiEndpoint);
    const response = await api.query(Prismic.Predicates.at('document.type', 'products'), { orderings: '[document.last_publication_date desc]' });
    const productDataItems = [];
    response.results.forEach((element) => {
      const productDataItem = {
        title: element.data.product_title[0].text,
        imageUrl: element.data.product_image.url,
        id: element.id,
        text: element.data.product_text[0].text,
      };
      productDataItems.push(productDataItem);
    });
    this.setState({ productDataItems });
  }

  render() {
    return (
      <div>
        { this.state.productDataItems.map((productDataItem) => <ProductCard data={productDataItem} />)}
      </div>
    );
  }
}
