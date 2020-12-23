import React from 'react';
import PropTypes from 'prop-types';
import { OutlineField as NameField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Name = ({ onChange }) => {
  const nameParams = {
    type: 'text',
    id: 'name',
    placeholder: 'full name',
    isFocused: true,
  };

  return (
    <div className="flex flex-col">
      <Label value="Name" />
      <NameField params={nameParams} onChange={onChange} />
    </div>
  );
};

Name.propTypes = {
  onChange: PropTypes.func,
};

Name.defaultProps = {
  onChange: '',
};

export default Name;
