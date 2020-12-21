import React from "react"
import facebook from '../../images/facebook.png';

const Home = () => (
    <div className="mt-10 flex flex-col items-center pb-24">
        Website under construction.
        <br/>
        <br/>
        <span className="text-brand">To contact us please use our facebook page!</span>
        <br/>
        <a href="https://www.facebook.com/The-Frosted-Fox-104827951525639">
            <img border="0" alt="Facebook" src={facebook} width="60" height="60"></img>
        </a>
    </div>
)
export default Home