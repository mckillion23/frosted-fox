import React from 'react';
import { OutlineField as EmailField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Email = ({ onChange }) => {
  const email = {
    type: 'text',
    id: 'email',
    placeholder: 'email@example.com',
  };

  return (
    <div className="flex flex-col">
      <Label value="Email" />
      <EmailField onChange={onChange} {...email} />
    </div>
  );
};

export default Email;
