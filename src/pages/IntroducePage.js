/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import pagestyle from '../lib/styles/pagestyle';
import BlockCycle from '../components/introduce/BlockCycle';

const IntroducePage = () => {
    return (
        <>
            <MenuList />
            <div css = {pagestyle}>
                <BlockCycle />
            </div>
            
        </>
    );
};

export default IntroducePage;