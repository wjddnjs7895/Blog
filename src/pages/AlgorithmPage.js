/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';

const AlgorithmPage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>Algorithm page</div>
        </>
    );
};

export default AlgorithmPage;