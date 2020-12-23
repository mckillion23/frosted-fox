import React from 'react';
import { OutlineField as SubjectField } from '../../../../library/Textfield';
import Label from '../../../../library/Label';

const Subject = ({ onChange }) => {
  const subject = {
    type: 'text',
    id: 'subject',
    placeholder: 'email subject',
  };

  return (
    <div className="flex flex-col">
      <Label value="Subject" />
      <SubjectField onChange={onChange} {...subject} />
    </div>
  );
};

export default Subject;
