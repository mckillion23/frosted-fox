import React from 'react';
import Facebook from "../../components/features/Facebook";

const FB = window.FB;

export default class Testimonies extends React.Component {
  componentDidMount() {
      FB.XFBML.parse();
  }

  render() {
    return (
        <div className="mt-10 flex flex-col items-center pb-24">
        Testimonies coming soon
        <br/>
        <br/>
        <span className="text-brand">To contact us please use our facebook page!</span>
        <br/>
        <Facebook />
    </div>
    )
  }
}