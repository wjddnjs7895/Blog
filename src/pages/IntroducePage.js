/** @jsxImportSource @emotion/react */
import React from 'react';
import MenuList from '../components/menu/MenuList';
import settingstyle from '../lib/styles/settingstyle';
import BlockCycle from '../components/introduce/BlockCycle';

const IntroducePage = () => {
    return (
        <>
            <MenuList />
            <div css = {settingstyle}>
                <BlockCycle />
            </div>
            
        </>
    );
};

export default IntroducePage;