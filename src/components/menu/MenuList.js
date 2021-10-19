/** @jsxImportSource @emotion/react */
import React from 'react';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const menuStyle = css`
    position : absolute;
    width : 15rem;
    height : 100vh;
    bottom : 0;
    top : 0;
    background-color : ${palette.black[0]};
    font-size : 20px;
    padding-top : 60vh;
    text-align : center;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    color : ${palette.gray[0]};
    .menu-list {
        font-weight : lighter;
        text-decoration : none;
        color : inherit;
        width : 100%;
        height : 3rem;
        text-align : center;
        padding-top : 1rem;
        &:hover {
            transition-property : background-color;
            transition-duration : 0.5s;
            background-color : black;
            color : white;
        }
        transition-property : background-color;
        transition-duration : 0.5s;
        background-color : ${palette.black[0]};
    }
`;

const MenuList = () => {
    return(
        <div css = {menuStyle}>
            <Link to = "/introduce" className = "menu-list">소개</Link>
            <Link to = "/algorithm" className = "menu-list">알고리즘</Link>
            <Link to = "/ai" className = "menu-list">인공지능</Link>
            <Link to = "/web" className = "menu-list">웹개발</Link>
        </div>
    );
};

export default MenuList;