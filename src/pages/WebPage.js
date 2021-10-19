/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';

const WebPage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>WebPage</div>
        </>
    );
};

export default WebPage;