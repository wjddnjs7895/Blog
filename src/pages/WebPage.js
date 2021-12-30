/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import settingstyle from '../lib/styles/settingstyle';

const WebPage = () => {
    return (
        <>
            <MenuList />
            <div css = {settingstyle}>WebPage</div>
        </>
    );
};

export default WebPage;