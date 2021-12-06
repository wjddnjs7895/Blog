/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';
import File from '../components/algorithm/Files';

const AlgorithmPage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>
                <File />
            </div>
        </>
    );
};

export default AlgorithmPage;