import React from 'react';
import Facebook from '../../components/features/Facebook';

export default class About extends React.Component {
  render() {
    return (
      <div className="mt-10 flex flex-col items-center pb-24">
        About us information coming soon
        <br />
        <br />
        <span className="text-brand">To contact us please use our facebook page!</span>
        <br />
        <Facebook />
      </div>
    );
  }
}
