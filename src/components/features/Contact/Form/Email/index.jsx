import React from 'react';
import PropTypes from 'prop-types';
import { OutlineField as EmailField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Email = ({ onChange }) => {
  const emailParams = {
    type: 'text',
    id: 'email',
    placeholder: 'email@example.com',
  };

  return (
    <div className="flex flex-col">
      <Label value="Email" />
      <EmailField params={emailParams} onChange={onChange} />
    </div>
  );
};

Email.propTypes = {
  onChange: PropTypes.func,
};

Email.defaultProps = {
  onChange: '',
};

export default Email;
