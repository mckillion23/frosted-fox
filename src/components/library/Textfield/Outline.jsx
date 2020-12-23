import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ params, onChange }) => {
  const ref = React.createRef();

  return (
    <input
      className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none mb-4"
      ref={ref}
      type={params.type}
      name={params.name}
      id={params.id}
      placeholder={params.placeholder}
      spellCheck="false"
      aria-describedby=" "
      onChange={onChange}
    />
  );
};

Field.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

Field.defaultProps = {
  params: {
    type: '',
    name: '',
    id: '',
    placeholder: '',
  },
  onChange: '',
};

export default Field;
