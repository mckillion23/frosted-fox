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
        <div className="mt-10 flex flex-col items-center pb-24">
        Products
          { this.state.results.map(result =>
            <p>
              Title: {result.data.product_title[0].text}
              <br/>
              Info: {result.data.product_text[0].text}
              <br/>
              Photo: <img src={result.data.product_image.url} alt={result.id} />
            </p>
          )}
    </div>
    )
  }
}