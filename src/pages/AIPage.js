/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import settingstyle from '../lib/styles/settingstyle';

const AIPage = () => {
    return (
        <>
            <MenuList />
            <div css = {settingstyle}>AI page</div>
        </>
    );
};

export default AIPage;