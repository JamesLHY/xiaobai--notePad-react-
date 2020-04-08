import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./icon";

const NavWrapper =styled.nav`
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,0.5);
> ul {
display:flex;
 > li{
 width:33.3333%;
 text-align:center;

 display: flex;
 flex-direction: column;
 padding: 8px;
 justify-content: center;
 align-items: center;
 .icon{
 width: 24px;
 height: 24px;
 }
 }
}
`;
const Nav =() =>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Icon name='tag'/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name='rmb'/>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Icon name='chart'/>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav