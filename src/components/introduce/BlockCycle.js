/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import Block from './Block';

const blockcycleStyle = css`
    position : block;
    display : flex;
`;

const BlockCycle = () => {
    return (
        <div css = {blockcycleStyle}>
            <Block/>
        </div>
    );
};

export default BlockCycle;