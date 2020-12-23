import React from 'react';
import PropTypes from 'prop-types';
import { OutlineField as MessageField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Message = ({ onChange }) => {
  const messageParams = {
    type: 'text',
    id: 'message',
    placeholder: 'email message',
  };

  return (
    <div className="flex flex-col">
      <Label value="Message" />
      <MessageField params={messageParams} onChange={onChange} />
    </div>
  );
};

Message.propTypes = {
  onChange: PropTypes.func,
};

Message.defaultProps = {
  onChange: '',
};

export default Message;
