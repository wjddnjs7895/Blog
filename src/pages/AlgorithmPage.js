/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';

import MenuList from '../components/menu/MenuList';
import settingstyle from '../lib/styles/settingstyle';
import Card from '../components/algorithm/Card';

const pagestyle = css`
    padding-left : 10vw;
    padding-right : 10vw;
    padding-top : 10vh;
    display : flex;
    justify-content : space-around;
`;

const AlgorithmPage = () => {
    return (
        <>
            <MenuList />
            <div css = {settingstyle}>
                <div css = {pagestyle}>
                    <Card i = {0}/>
                    <Card i = {1}/>
                    <Card i = {2}/>
                </div>
            </div>
        </>
    );
};

export default AlgorithmPage;