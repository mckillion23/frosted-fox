import React from 'react';
import Prismic from "prismic-javascript";

const apiEndpoint = "https://frosted-fox.cdn.prismic.io/api/v2";

export default class Products extends React.Component {
  state = {
    results: []
  }

  async componentDidMount() {   
    const api = await Prismic.getApi(apiEndpoint);
    const response = await api.query("");
    this.setState({ results: response.results })
  }

  render() {
    return (
        <div>
          { this.state.results.map(result =>
            <div className="product-card mt-12 pb-8 bg-gray-100 rounded-lg mx-auto px-8 pt-8 mt-12">
              <h1 className="ml-auto text-xs font-helvetica font-extrabold text-brand text-xl mb-4">
                {result.data.product_title[0].text}
              </h1>
              <img width="300" height="300" src={result.data.product_image.url} alt={result.id} className="mb-4" />
              {result.data.product_text[0].text}
            </div>
          )}
    </div>
    )
  }
}