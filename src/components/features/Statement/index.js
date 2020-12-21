import React from "react"
import facebook from '../../../images/facebook.png';

const UniqueValueStatement = () => (
    <p className="xs:text-2xl 
                  sm:text-4xl
                  md:text-5xl
                  font-helvetica font-bold text-6xl text-center text-brand-dark leading-snug">
        Website under construction.
        <br/>
        <span className="text-brand">To contact us please use our facebook page!</span>
        <br/>
        <a href="https://www.facebook.com/The-Frosted-Fox-104827951525639">
            <img border="0" alt="Facebook" src={facebook} width="60" height="60"></img>
        </a>
    </p>
)

export default UniqueValueStatement
