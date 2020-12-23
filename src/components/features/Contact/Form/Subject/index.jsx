import React from 'react';
import PropTypes from 'prop-types';
import { OutlineField as SubjectField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Subject = ({ onChange }) => {
  const subjectParams = {
    type: 'text',
    id: 'subject',
    placeholder: 'email subject',
  };

  return (
    <div className="flex flex-col">
      <Label value="Subject" />
      <SubjectField params={subjectParams} onChange={onChange} />
    </div>
  );
};

Subject.propTypes = {
  onChange: PropTypes.func,
};

Subject.defaultProps = {
  onChange: '',
};

export default Subject;
