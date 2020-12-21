import React from 'react';
import Facebook from "../../components/features/Facebook";
import axios from 'axios';

const FB = window.FB;

export default class About extends React.Component {
  state = {
    blogItems: []
  }

  componentDidMount() {
    axios.get(`https://frosted-fox-service.herokuapp.com/`)
      .then(res => {
        const blogItems = res.data;
        this.setState({ blogItems });
      });

      FB.XFBML.parse();
  }

  render() {
    return (
        <div className="mt-10 flex flex-col items-center pb-24">
            About us information coming soon
            <br/>
            <br/>
            <span className="text-brand">To contact us please use our facebook page!</span>
            <br/>
            <Facebook />
            Blog Items:
            <ul>
                { this.state.blogItems.map(blogItem => <li>{blogItem.text}</li>)}
            </ul>
        </div>
    )
  }
}