import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
background: #ffffff;
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,0.5);
> ul {
display:flex;
 > li{
 width:33.3333%;
 text-align:center;
 > a{
 display: flex;
 flex-direction: column;
 padding: 8px;
 justify-content: center;
 align-items: center;
 .icon{
 width: 24px;
 height: 24px;
 }
 &.selected{
 color: red;
 .icon{
 fill:red;
 }
 }
 }
 
 
 }
}
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>

                    <NavLink to="/tags" exact activeClassName='selected'>
                        <Icon name='tag'/>
                        标签页</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName='selected'>
                        <Icon name='rmb'/>
                        记账</NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName='selected'>
                        <Icon name='chart'/>
                        统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;