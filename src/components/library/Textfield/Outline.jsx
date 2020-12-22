import React from "react"

const Field = ({
    type,
    name,
    id,
    placeholder,
    onChange }) => {

    const ref = React.createRef();

    return (<input className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none"
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        spellCheck="false"
        aria-describedby=" "
        onChange={onChange}
    />)
}

export default Field