/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import settingstyle from '../lib/styles/settingstyle';

const MainPage = () => {
    return (
        <>
            <MenuList />
            <div css = {settingstyle}>MainPage</div>
        </>
    );
};

export default MainPage;