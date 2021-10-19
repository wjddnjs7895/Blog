/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';

const AIPage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>AI page</div>
        </>
    );
};

export default AIPage;