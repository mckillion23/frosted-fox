import React from 'react';
import { OutlineField as MessageField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Message = ({ onChange }) => {
  const message = {
    type: 'text',
    id: 'message',
    placeholder: 'email message',
  };

  return (
    <div className="flex flex-col">
      <Label value="Message" />
      <MessageField onChange={onChange} {...message} />
    </div>
  );
};

export default Message;
