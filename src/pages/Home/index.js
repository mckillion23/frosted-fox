import React from 'react';
import Facebook from "../../components/features/Facebook";

export default class Home extends React.Component {
  render() {
    return (
        <div className="mt-10 flex flex-col items-center pb-24">
        Website under construction.
        <br/>
        <br/>
        <span className="text-brand">To contact us please use our facebook page!</span>
        <br/>
        <Facebook />
    </div>
    )
  }
}