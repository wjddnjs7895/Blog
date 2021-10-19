/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';

const MainPage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>MainPage</div>
        </>
    );
};

export default MainPage;