import React from "react";
import { FACEBOOK } from "../../../constants/routes";
import facebook from "../../../images/facebook.png"

const Facebook = () => (
    <a href={FACEBOOK.link}>
        <img border="0" alt={FACEBOOK.name} src={facebook} width="60" height="60"></img>
    </a>);

export default Facebook