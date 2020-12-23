import React from 'react';
import { OutlineField as NameField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Name = ({ onChange }) => {
  const name = {
    type: 'text',
    id: 'name',
    placeholder: 'full name',
    isFocused: true,
  };

  return (
    <div className="flex flex-col">
      <Label value="Name" />
      <NameField onChange={onChange} {...name} />
    </div>
  );
};

export default Name;
